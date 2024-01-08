//контекст используется для получения доступа к переменным из любого файла проекта

import { createContext } from "react";

//список тем
export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

//переменная ключа локального хранилища темы
export const LOCAL_STORAGE_THEME = "theme";
