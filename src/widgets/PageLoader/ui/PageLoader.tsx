import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./PageLoader.module.scss";
import { memo, type FC } from "react";
import { Loader } from "shared/ui/Loader/Loader";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = memo(
  ({ className = "" }: PageLoaderProps) => {
    return (
      <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
      </div>
    );
  }
);

PageLoader.displayName = "PageLoader";
