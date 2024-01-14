import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./Button.module.scss";
import { type ButtonHTMLAttributes, type FC } from "react";

export enum ButtonThemes {
  CLEAR = "clear",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemes;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, theme, children, ...otherProps } = props;

  return (
    <button
      className={classNames(cls.Button, {}, [
        className ?? "",
        cls[theme ?? ""],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
