import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./ThemeButton.module.scss";
import { useTheme } from "app/providers/ThemeProvider";
import DarkThemeIcon from "shared/assets/icons/dark-theme-icon.svg";
import LightThemeIcon from "shared/assets/icons/light-theme-icon.svg";
import { Theme } from "app/providers/ThemeProvider";
import { Button, ButtonThemes } from "shared/ui/Button/Button";

interface ThemeButtonProps {
  className?: string;
}

export const ThemeButton = ({ className }: ThemeButtonProps) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(cls.ThemeButton, {}, [className])}
      theme={ButtonThemes.CLEAR}
    >
      {theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
    </Button>
  );
};
