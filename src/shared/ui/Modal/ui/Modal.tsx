import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./Modal.module.scss";
import {
  type ReactNode,
  type FC,
  type MouseEvent,
  useState,
  useRef,
  useEffect,
  useCallback
} from "react";
import { Portal } from "shared/ui/Portal";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
  onClose?: () => void;
}

const TIMER_DELAY = 300;

export const Modal: FC<ModalProps> = ({
  className = "",
  children,
  isOpen,
  onClose,
}: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const disableContentClick = useCallback((e: MouseEvent): void => {
    e.stopPropagation();
  }, []);

  const closeHandler = useCallback((): void => {
    setIsClosing(true);
    if (onClose !== undefined) {
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, TIMER_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === "Escape") closeHandler();
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      if (timerRef.current !== undefined) clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div
          onClick={() => {
            closeHandler();
          }}
          className={cls.wrapper}
        >
          <div
            onClick={(e) => {
              disableContentClick(e);
            }}
            className={cls.content}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
