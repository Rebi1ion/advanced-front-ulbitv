// хук для получения доступа к переменной темы и функции переключения тем
// можно вызвать его в любом файле проекта

import { useContext } from "react";
import { LOCAL_STORAGE_THEME, Theme, ThemeContext } from "./ThemeContext";

interface UseToggleTheme {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseToggleTheme {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme(): void {
    let newTheme: Theme;

    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.TURQUOISE;
        break;
      case Theme.TURQUOISE:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.LIGHT;
        break;
    }

    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME, newTheme);
  }

  return {
    toggleTheme,
    theme,
  };
}
