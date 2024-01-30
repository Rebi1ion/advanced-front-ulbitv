import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useCallback, type FC, memo } from "react";
import { Button, ButtonThemes } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "features/AuthByUsername/model/slices/loginSlice";
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(({ className = "" }) => {
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t("Авторизация")} />
      {Boolean(error) && (
        <Text
          theme={TextTheme.ERROR}
          text={t("Неправильный логин или пароль")}
        />
      )}
      <Input
        onChange={onChangeUsername}
        autoFocus={true}
        value={username}
        placeholder={t("Логин")}
        type="text"
      />
      <Input
        onChange={onChangePassword}
        value={password}
        placeholder={t("Пароль")}
        type="password"
      />
      <Button
        onClick={onLoginClick}
        className={cls.loginBtn}
        theme={ButtonThemes.OUTLINE}
        disabled={isLoading}
      >
        {t("Войти")}
      </Button>
    </div>
  );
});

LoginForm.displayName = "LoginForm";
