import { type FC } from "react";
import { Modal } from "shared/ui/Modal";
import { LoginForm } from "../LoginForm/LoginForm";

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
      <LoginForm />
    </Modal>
  );
};
