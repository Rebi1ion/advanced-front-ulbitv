import { Counter } from "./components/Counter";
import "./index.scss";
import { Route, Routes, Link } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Suspense } from "react";

function App() {
  return (
    <div className="app">
      <Link to={"/"} style={{ marginRight: "20px" }}>
        Главная
      </Link>
      <Link to={"/about"}>О нас</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
