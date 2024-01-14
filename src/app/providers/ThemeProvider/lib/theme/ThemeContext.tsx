// контекст используется для получения доступа к переменным из любого файла проекта

import { createContext } from "react";

// переменная ключа локального хранилища темы
export const LOCAL_STORAGE_THEME = "theme";

// список тем
export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME) as Theme) ?? Theme.LIGHT;

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme,
  setTheme: () => {},
});
