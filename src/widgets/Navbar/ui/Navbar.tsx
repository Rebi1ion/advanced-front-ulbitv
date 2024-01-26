import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { useState, type FC, useCallback } from "react";
import { Button, ButtonThemes } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal";

interface NavbarProps {
  className?: string;
}

export const linksRoutes: Record<string, string> = {
  main: "/",
  about: "/about",
};

export const Navbar: FC<NavbarProps> = ({ className = "" }) => {
  const { t } = useTranslation();
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsOpenAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.navbarLinks)}>
        <Button
          onClick={() => {
            onToggleModal();
          }}
          theme={ButtonThemes.CLEAR}
          invertedColors
        >
          {t("Войти")}
        </Button>

        <Modal isOpen={isOpenAuthModal} onClose={onToggleModal}>
          <form></form>
        </Modal>
      </div>
    </div>
  );
};
