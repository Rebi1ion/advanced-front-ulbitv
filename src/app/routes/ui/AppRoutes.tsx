import { t } from "i18next";
import { type FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "shared/config/routeConfig/routeConfig";

export const AppRoutes: FC = () => {
  return (
    <Suspense fallback={t("Загрузка") ?? ""}>
      <Routes>
        {routerConfig.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
