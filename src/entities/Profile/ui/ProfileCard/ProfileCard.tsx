import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import { type FC } from "react";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData";
// import { getProfilePending } from "entities/Profile/model/selectors/getProfilePending";
// import { getProfileError } from "entities/Profile/model/selectors/getProfileError";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text";
import { Button, ButtonThemes } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className = "" }) => {
  const { t } = useTranslation("profile");
  const data = useSelector(getProfileData);
  //   const isLoading = useSelector(getProfilePending);
  //   const error = useSelector(getProfileError);
  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text text={t("Профиль")} />
        <Button theme={ButtonThemes.OUTLINE}>{t("Редактировать")}</Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t("Имя")}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t("Фамилия")}
          className={cls.input}
        />
      </div>
    </div>
  );
};
