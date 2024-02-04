import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./ThemeButton.module.scss";
import { useTheme, Theme } from "app/providers/ThemeProvider";
import DarkThemeIcon from "shared/assets/icons/dark-theme-icon.svg";
import LightThemeIcon from "shared/assets/icons/light-theme-icon.svg";

import { Button, ButtonThemes } from "shared/ui/Button/Button";
import { memo, type ReactElement } from "react";

interface ThemeButtonProps {
  className?: string;
}

export const ThemeButton = memo(
  ({ className }: ThemeButtonProps): ReactElement => {
    const { toggleTheme, theme } = useTheme();

    return (
      <Button
        type="button"
        onClick={toggleTheme}
        className={classNames(cls.ThemeButton, {}, [className ?? ""])}
        theme={ButtonThemes.CLEAR}
      >
        {theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
      </Button>
    );
  }
);

ThemeButton.displayName = "ThemeButton";
