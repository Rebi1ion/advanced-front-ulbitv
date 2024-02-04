import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./NotFoundPage.module.scss";
import { memo, type FC } from "react";
import { useTranslation } from "react-i18next";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = memo(
  ({ className = "" }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
      <div className={classNames(cls.NotFoundPage, {}, [className])}>
        <h1>{t("Страница не найдена")}</h1>
      </div>
    );
  }
);

NotFoundPage.displayName = "NotFoundPage";
