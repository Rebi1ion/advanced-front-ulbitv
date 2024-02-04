import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./Button.module.scss";
import { memo, type ButtonHTMLAttributes, type FC } from "react";

export enum ButtonThemes {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  INVERTED_BACKGROUND = "inverted-background",
}

export enum ButtonSizes {
  S = "size-s",
  M = "size-m",
  L = "size-l",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemes;
  square?: true;
  size?: ButtonSizes;
  invertedColors?: true;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    theme,
    children,
    square,
    invertedColors,
    disabled,
    size = ButtonSizes.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square ?? false,
    [cls.invertedColors]: invertedColors ?? false,
    [cls[size]]: true,
    [cls.disabled]: disabled ?? false,
  };

  return (
    <button
      className={classNames(cls.Button, mods, [
        className ?? "",
        cls[theme ?? ""],
      ])}
      {...otherProps}
      disabled={disabled}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
