import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { useState, type FC, useCallback, memo } from "react";
import { Button, ButtonThemes } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";

interface NavbarProps {
  className?: string;
}

export const linksRoutes: Record<string, string> = {
  main: "/",
  about: "/about",
};

export const Navbar: FC<NavbarProps> = memo(({ className = "" }) => {
  const { t } = useTranslation();
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const userAuthData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseLoginModal = useCallback(() => {
    setIsOpenLoginModal(false);
  }, []);

  const onOpenLoginModal = useCallback(() => {
    setIsOpenLoginModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (userAuthData !== undefined) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={classNames(cls.navbarLinks)}>
          <Button
            onClick={() => {
              onLogout();
            }}
            theme={ButtonThemes.CLEAR}
            invertedColors
          >
            {t("Выйти")}
          </Button>
        </div>
      </div>
    );
  }
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

        {isOpenLoginModal && (
          <LoginModal onClose={onCloseLoginModal} isOpen={isOpenLoginModal} />
        )}
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";
