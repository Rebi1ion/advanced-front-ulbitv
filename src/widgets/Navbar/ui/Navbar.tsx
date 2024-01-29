import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { useState, type FC, useCallback } from "react";
import { Button, ButtonThemes } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername/ui/LoginModal/LoginModal";

interface NavbarProps {
  className?: string;
}

export const linksRoutes: Record<string, string> = {
  main: "/",
  about: "/about",
};

export const Navbar: FC<NavbarProps> = ({ className = "" }) => {
  const { t } = useTranslation();
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  const onCloseLoginModal = useCallback(() => {
    setIsOpenLoginModal(false);
  }, []);

  const onOpenLoginModal = useCallback(() => {
    setIsOpenLoginModal(true);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.navbarLinks)}>
        <Button
          onClick={() => {
            onOpenLoginModal();
          }}
          theme={ButtonThemes.CLEAR}
          invertedColors
        >
          {t("Войти")}
        </Button>

        <LoginModal onClose={onCloseLoginModal} isOpen={isOpenLoginModal} />
      </div>
    </div>
  );
};
