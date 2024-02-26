import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./Text.module.scss";
import { memo, type FC } from "react";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

export enum TextAlign {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text: FC<TextProps> = memo((props) => {
  const {
    className = "",
    theme = TextTheme.PRIMARY,
    title,
    text,
    align = TextAlign.LEFT,
  } = props;
  return (
    <div
      className={classNames(
        cls.Text,
        { [cls[theme]]: true, [cls[align]]: true },
        [className]
      )}
    >
      {Boolean(title) && <p className={cls.title}>{title}</p>}
      {Boolean(text) && <p className={cls.text}>{text}</p>}
    </div>
  );
});

Text.displayName = "Text";
