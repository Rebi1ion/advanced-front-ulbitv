import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./Avatar.module.scss";
import { memo, type CSSProperties, type FC, useMemo } from "react";

interface AvatarProps {
  className?: string;
  size?: number;
  src?: string;
  alt?: string;
}

export const Avatar: FC<AvatarProps> = memo((props) => {
  const { className = "", size, src, alt } = props;

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );
  return (
    <img
      className={classNames(cls.Avatar, {}, [className])}
      alt={alt}
      src={src}
      style={styles}
    />
  );
});

Avatar.displayName = "Avatar";
