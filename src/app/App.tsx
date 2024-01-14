import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import classNames from "shared/lib/helpers/classNames/classNames";
import { AppRoutes } from "./routes";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { type FC, Suspense } from "react";
import { useTranslation } from "react-i18next";

const App: FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar className={theme} />
        <Suspense fallback={t("Загрузка") ?? ""}></Suspense>
        <div className="content-page">
          <Sidebar />
          <AppRoutes />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
