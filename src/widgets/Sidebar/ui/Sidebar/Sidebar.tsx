import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { type FC, useState } from "react";
import { Button, ButtonSizes, ButtonThemes } from "shared/ui/Button/Button";
import { ThemeButton } from "widgets/ThemeButton";
import { LanguageSwitcher } from "widgets/LanguageSwitcher";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import MainIcon from "shared/assets/icons/main-page-icon.svg";
import AboutIcon from "shared/assets/icons/about-page-icon.svg";
import { RoutePaths } from "shared/config/routeConfig/routeConfig";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className = "" }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const toggleSidebar = (): void => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-button"
        onClick={toggleSidebar}
        className={cls.sidebarButton}
        theme={ButtonThemes.INVERTED_BACKGROUND}
        square
        size={ButtonSizes.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.sidebarItems}>
        <AppLink
          className={classNames(cls.appLink, { [cls.collapsed]: collapsed })}
          theme={AppLinkTheme.PRIMARY}
          to={RoutePaths.main}
        >
          <MainIcon className={cls.icon} />
          <span>{t("Главная")}</span>
        </AppLink>
        <AppLink
          className={classNames(cls.appLink, { [cls.collapsed]: collapsed })}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePaths.about}
        >
          <AboutIcon className={cls.icon} />
          <span>{t("О нас")}</span>
        </AppLink>
      </div>

      <div className={cls.switchers}>
        <ThemeButton />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
