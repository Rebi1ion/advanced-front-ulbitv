import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { type FC, useState } from "react";
import { Button } from "shared/ui/Button/Button";
import { ThemeButton } from "widgets/ThemeButton";
import { LanguageSwitcher } from "widgets/LanguageSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className = "" }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = (): void => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={toggleSidebar}>Toggle Sidebar</Button>

      <div className={cls.switchers}>
        <ThemeButton />
        <LanguageSwitcher />
      </div>
    </div>
  );
};