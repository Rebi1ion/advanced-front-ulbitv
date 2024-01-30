import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./Text.module.scss";
import { type FC } from "react";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: FC<TextProps> = (props) => {
  const {
    className = "",
    theme = TextTheme.PRIMARY,
    title,
    text,
  } = props;
  return (
    <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
      {Boolean(title) && <p className={cls.title}>{title}</p>}
      {Boolean(text) && <p className={cls.text}>{text}</p>}
    </div>
  );
};
