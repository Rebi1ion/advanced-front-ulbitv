import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./NotFoundPage.module.scss";
import { type FC } from "react";
import { useTranslation } from "react-i18next";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({
  className = "",
}: NotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      <h1>{t("Страница не найдена")}</h1>
    </div>
  );
};
