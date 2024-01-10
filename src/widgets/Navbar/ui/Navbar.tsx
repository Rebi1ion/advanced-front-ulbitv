import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeButton } from "widgets/ThemeButton";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeButton />
      <div className={classNames(cls.navbarLinks)}>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/"}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          О нас
        </AppLink>
      </div>
    </div>
  );
};