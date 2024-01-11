import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ButtonThemes {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemes;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme,
    children,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
