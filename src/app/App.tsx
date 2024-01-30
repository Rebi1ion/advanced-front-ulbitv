/* eslint-disable i18next/no-literal-string */
import { useTheme } from "./providers/ThemeProvider";
import { AppRoutes } from "./routes";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { type FC, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";

const App: FC = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initUserData());
  }, [dispatch]);

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
