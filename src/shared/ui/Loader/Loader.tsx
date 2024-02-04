import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./Loader.module.scss";
import { memo, type FC } from "react";

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = memo(
  ({ className = "" }: LoaderProps) => {
    return <div className={classNames(cls.Loader, {}, [className])}></div>;
  }
);

Loader.displayName = "Loader";
