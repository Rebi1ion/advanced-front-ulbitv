import classNames from "shared/lib/helpers/classNames/classNames";
// import cls from "./BugButton.module.scss";
import { useState, type FC, useEffect } from "react";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface BugButtonProps {
  className?: string;
}

// кнопка для проброса ошибки (тест)
export const BugButton: FC<BugButtonProps> = ({ className = "" }) => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  const onThrow = (): void => {
    setError(true);
  };

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return (
    <Button onClick={onThrow} className={classNames("", {}, [className])}>
      {t("Выбросить ошибку")}
    </Button>
  );
};
