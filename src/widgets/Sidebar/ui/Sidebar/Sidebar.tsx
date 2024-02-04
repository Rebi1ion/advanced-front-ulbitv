import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { type FC, useState, memo } from "react";
import { Button, ButtonSizes, ButtonThemes } from "shared/ui/Button/Button";
import { ThemeButton } from "widgets/ThemeButton";
import { LanguageSwitcher } from "widgets/LanguageSwitcher";
import { SidebarItemList } from "widgets/Sidebar/model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className = "" }) => {
  const [collapsed, setCollapsed] = useState(false);
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
        {SidebarItemList.map((item, index) => (
          <SidebarItem collapsed={collapsed} item={item} key={index} />
        ))}
      </div>

      <div className={cls.switchers}>
        <ThemeButton />
        <LanguageSwitcher />
      </div>
    </div>
  );
});

Sidebar.displayName = "Sidebar";
