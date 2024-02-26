import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./ProfileHeader.module.scss";
import { useCallback, type FC } from "react";
import { Button, ButtonThemes } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  getProfileReadonly,
  profileActions,
  updateProfileData
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

interface ProfileHeaderProps {
  className?: string;
}

export const ProfileHeader: FC<ProfileHeaderProps> = ({ className = "" }) => {
  const { t } = useTranslation("profile");
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(async () => {
    await dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfileHeader, {}, [className])}>
      <Text title={t("Профиль")} />

      {readonly
        ? (
        <Button theme={ButtonThemes.OUTLINE} onClick={onEdit}>
          {t("Редактировать")}
        </Button>
          )
        : (
        <>
          <Button theme={ButtonThemes.OUTLINE_RED} onClick={onCancelEdit}>
            {t("Отменить")}
          </Button>
          <Button theme={ButtonThemes.OUTLINE} onClick={onSave}>
            {t("Сохранить")}
          </Button>
        </>
          )}
    </div>
  );
};
