// провайдером необходимо обернуть проект, чтобы иметь доступ к контексту

import { type FC, useMemo, useState } from "react";
import { ThemeContext, defaultTheme } from "../lib/theme/ThemeContext";

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const themeContextValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
