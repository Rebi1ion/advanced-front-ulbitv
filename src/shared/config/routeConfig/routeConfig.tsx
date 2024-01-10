import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const routerConfig: RouteProps[] = [
  {
    path: RoutePaths.main,
    element: <MainPage />,
  },
  {
    path: RoutePaths.about,
    element: <AboutPage />,
  },
];
