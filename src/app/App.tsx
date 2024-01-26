/* eslint-disable i18next/no-literal-string */
import { useTheme } from "./providers/ThemeProvider";
import { AppRoutes } from "./routes";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { type FC, Suspense } from "react";

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className="app">
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
