import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { type Profile } from "entities/Profile/model/types/profileSchema";
import { Loader } from "shared/ui/Loader/Loader";
import { Text, TextTheme } from "shared/ui/Text";
import { TextAlign } from "shared/ui/Text/ui/Text";
import { Avatar } from "shared/ui/Avatar";
import { type Currency } from "entities/SelectCurrency/model/types/currency";
import { SelectCurrency } from "entities/SelectCurrency";
import { type Countries, SelectCountry } from "entities/SelectCountry";

interface ProfileCardProps {
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  className?: string;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Countries) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const { t } = useTranslation("profile");
  const {
    className = "",
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  if (isLoading !== undefined && isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loader])}>
        <Loader />
      </div>
    );
  }

  if (error !== undefined && Boolean(error)) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t("Произошла ошибка при загрузке профиля")}
          text={t("Попробуйте обновить страницу")}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.data}>
        {Boolean(data?.avatar) && (
          <Avatar src={data?.avatar} alt="avatar" size={150} />
        )}

        <Input
          value={data?.first}
          placeholder={t("Имя")}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeFirstname}
        />
        <Input
          value={data?.lastname}
          placeholder={t("Фамилия")}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeLastname}
        />
        <Input
          value={`${data?.age}`}
          placeholder={t("Возраст")}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeAge}
        />
        <Input
          value={data?.city}
          placeholder={t("Город")}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeCity}
        />
        <Input
          value={data?.username}
          placeholder={t("Имя пользователя")}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeUsername}
        />
        <Input
          value={data?.avatar}
          placeholder={t("Ссылка на аватар")}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeAvatar}
        />
        <SelectCurrency
          label={t("Валюта")}
          onChange={onChangeCurrency}
          readonly={readonly}
          value={data?.currency}
        />
        <SelectCountry
          label={t("Страна")}
          onChange={onChangeCountry}
          readonly={readonly}
          value={data?.country}
        />
      </div>
    </div>
  );
};
