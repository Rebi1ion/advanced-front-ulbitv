import { Suspense, type FC } from "react";
import { Modal } from "shared/ui/Modal";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import { Loader } from "shared/ui/Loader/Loader";

interface LoginModalProps {
  isOpen: boolean;
  className?: string;
  onClose?: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({
  isOpen,
  onClose,
}: LoginModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
