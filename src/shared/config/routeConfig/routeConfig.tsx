import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePageAsync } from "pages/ProfilePage";
import { type RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",

  // last
  NOT_FOUND = "not_found",
}

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",

  // 404 Всегда последний
  [AppRoutes.NOT_FOUND]: "*",
};

export const routerConfig: AppRouteProps[] = [
  {
    path: RoutePaths.main,
    element: <MainPage />,
  },
  {
    path: RoutePaths.about,
    element: <AboutPage />,
  },
  {
    path: RoutePaths.profile,
    element: <ProfilePageAsync />,
    authOnly: true,
  },

  // last
  {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
];
