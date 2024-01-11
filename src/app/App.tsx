import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import classNames from "shared/lib/helpers/classNames/classNames";
import { AppRoutes } from "./routes";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar className={theme} />
      <div className="content-page">
        <Sidebar />
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
