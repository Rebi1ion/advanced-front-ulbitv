import "./styles/index.scss";
import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import classNames from "shared/lib/helpers/classNames/classNames";
import { AppRoutes } from "./routes";

function App() {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Поменять тему</button>
      <Link to={"/"} style={{ marginRight: "20px" }}>
        Главная
      </Link>
      <Link to={"/about"}>О нас</Link>

      <AppRoutes />
    </div>
  );
}

export default App;
