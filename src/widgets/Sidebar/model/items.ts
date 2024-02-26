import { RoutePaths } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main-page-icon.svg";
import AboutIcon from "shared/assets/icons/about-page-icon.svg";
import ProfileIcon from "shared/assets/icons/profile-page.svg";

export interface SidebarItemTypes {
  path: string;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  text: string;
  authOnly?: boolean;
}

export const SidebarItemList: SidebarItemTypes[] = [
  { path: RoutePaths.main, Icon: MainIcon, text: "Главная" },
  { path: RoutePaths.about, Icon: AboutIcon, text: "О нас" },
  {
    path: RoutePaths.profile,
    Icon: ProfileIcon,
    text: "Профиль",
    authOnly: true,
  },
];
