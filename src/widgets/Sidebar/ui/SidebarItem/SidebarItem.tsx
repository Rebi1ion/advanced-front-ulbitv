import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./SidebarItem.module.scss";
import { memo, type FC } from "react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { type SidebarItemTypes } from "widgets/Sidebar/model/items";

interface SidebarItemProps {
  className?: string;
  collapsed: boolean;
  item: SidebarItemTypes;
}

export const SidebarItem: FC<SidebarItemProps> = memo(
  ({ className = "", collapsed, item }) => {
    const { t } = useTranslation();
    return (
      <AppLink
        className={classNames(cls.appLink, { [cls.collapsed]: collapsed })}
        theme={AppLinkTheme.PRIMARY}
        to={item?.path}
      >
        <item.Icon className={cls.icon} />
        <span>{t(item.text)}</span>
      </AppLink>
    );
  }
);

SidebarItem.displayName = "SidebarItem";
