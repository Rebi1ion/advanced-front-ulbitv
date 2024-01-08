import "./styles/index.scss";
import { Route, Routes, Link } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { Suspense } from "react";
import { useTheme } from "./providers/ThemeProvider";
import classNames from "shared/lib/helpers/classNames/classNames";

function App() {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Поменять тему</button>
      <Link to={"/"} style={{ marginRight: "20px" }}>
        Главная
      </Link>
      <Link to={"/about"}>О нас</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
