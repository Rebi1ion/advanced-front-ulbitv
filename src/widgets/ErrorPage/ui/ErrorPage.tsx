import classNames from "shared/lib/helpers/classNames/classNames";
// import cls from "./ErrorPage.module.scss";
import { memo, type FC } from "react";
import { useTranslation } from "react-i18next";

export const ErrorPage: FC = memo(() => {
  const { t } = useTranslation();

  const reloadPage = (): void => {
    location.reload();
  };

  return (
    <div className={classNames("", {}, [])}>
      <h2>{t("Что-то пошло не так")}</h2>
      <button onClick={reloadPage}>{t("Обновить страницу")}</button>
    </div>
  );
});

ErrorPage.displayName = "ErrorPage";
