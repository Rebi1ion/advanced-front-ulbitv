import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useCallback, type FC, memo } from "react";
import { Button, ButtonThemes } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginActions, loginReducer } from "../../model/slices/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginLoading } from "../../model/selectors/getLoginLoading/getLoginLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import {
  DynamicModuleLoader,
  type ReducersList
} from "shared/lib/helpers/components/DynamicModuleLoader/DynamicModuleLoader";

interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = memo(({ className = "" }) => {
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

  const initialReducers: ReducersList = {
    login: loginReducer,
  };

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
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
    </DynamicModuleLoader>
  );
});

LoginForm.displayName = "LoginForm";

export default LoginForm;
