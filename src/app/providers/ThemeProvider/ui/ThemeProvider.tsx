//провайдером необходимо обернуть проект, чтобы иметь доступ к контексту

import { FC, useMemo, useState } from "react";
import {
  LOCAL_STORAGE_THEME,
  Theme,
  ThemeContext,
} from "../lib/theme/ThemeContext";

export const ThemeProvider: FC = ({ children }) => {
  const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME) as Theme) || Theme.LIGHT;
  const [theme, setTheme] = useState(defaultTheme);

  const themeContextValue = useMemo(
    () => ({ theme: theme, setTheme: setTheme }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
