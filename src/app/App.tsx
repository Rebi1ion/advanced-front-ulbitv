import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import classNames from "shared/lib/helpers/classNames/classNames";
import { AppRoutes } from "./routes";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { type FC, Suspense } from "react";

const App: FC = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar className={theme} />
        <div className="content-page">
          <Sidebar />
          <AppRoutes />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
