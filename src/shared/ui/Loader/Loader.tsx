import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./Loader.module.scss";
import { type FC } from "react";

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className = "" }: LoaderProps) => {
  return <div className={classNames(cls.Loader, {}, [className])}></div>;
};
