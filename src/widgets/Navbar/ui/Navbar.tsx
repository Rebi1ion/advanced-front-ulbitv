import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { type FC } from "react";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className = "" }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.navbarLinks)}>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/"}>
          {t("Главная")}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          {t("О нас")}
        </AppLink>
      </div>
    </div>
  );
};
