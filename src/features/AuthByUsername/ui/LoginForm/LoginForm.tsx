import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { type FC } from "react";
import { Button, ButtonThemes } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className = "" }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        autoFocus={true}
        placeholder={t("Логин")}
        type="text"
      />
      <Input placeholder={t("Пароль")} type="password" />
      <Button className={cls.loginBtn} theme={ButtonThemes.OUTLINE}>
        {t("Войти")}
      </Button>
    </div>
  );
};
