import { profileReducer } from "entities/Profile";
import { memo, type FC } from "react";
import { useTranslation } from "react-i18next";
import {
  DynamicModuleLoader,
  type ReducersList
} from "shared/lib/helpers/components/DynamicModuleLoader/DynamicModuleLoader";

const ProfilePage: FC = memo(() => {
  const { t } = useTranslation("profile");

  const initialReducers: ReducersList = {
    profile: profileReducer,
  };

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div>{t("Страница профиля")}</div>
    </DynamicModuleLoader>
  );
});

ProfilePage.displayName = "ProfilePage";

export default ProfilePage;
