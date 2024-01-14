import { type FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "shared/config/routeConfig/routeConfig";
import { useTranslation } from "react-i18next";

export const AppRoutes: FC = () => {
  const { t } = useTranslation();
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
