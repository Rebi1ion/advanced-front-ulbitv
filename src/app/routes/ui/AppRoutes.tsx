import { getUserAuthData } from "entities/User";
import { type FC, Suspense, memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

export const AppRoutes: FC = memo(() => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(
    () =>
      routerConfig.filter((route) => {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        return !(Boolean(route.authOnly) && !isAuth);
      }),
    [isAuth]
  );

  console.log(routes);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
});

AppRoutes.displayName = "AppRoutes";
