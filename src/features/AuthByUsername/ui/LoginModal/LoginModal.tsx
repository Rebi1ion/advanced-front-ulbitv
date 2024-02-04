import { Suspense, type FC, memo } from "react";
import { Modal } from "shared/ui/Modal";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import { Loader } from "shared/ui/Loader/Loader";

interface LoginModalProps {
  isOpen: boolean;
  className?: string;
  onClose?: () => void;
}

export const LoginModal: FC<LoginModalProps> = memo(
  ({ isOpen, onClose }: LoginModalProps) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} lazy>
        <Suspense fallback={<Loader />}>
          <LoginFormAsync onSuccess={onClose} />
        </Suspense>
      </Modal>
    );
  }
);

LoginModal.displayName = "LoginModal";
