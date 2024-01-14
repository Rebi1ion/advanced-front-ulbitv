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
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME, newTheme);
  }

  return {
    toggleTheme,
    theme,
  };
}
