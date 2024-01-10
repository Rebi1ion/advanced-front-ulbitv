import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import classNames from "shared/lib/helpers/classNames/classNames";
import { AppRoutes } from "./routes";
import { Navbar } from "widgets/Navbar";

function App() {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar className={theme} />
      <button onClick={toggleTheme}>Поменять тему</button>
      <AppRoutes />
    </div>
  );
}

export default App;
