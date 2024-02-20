import {
  ProfileCard,
  fetchProfileData,
  profileReducer
} from "entities/Profile";
import { memo, type FC, useEffect } from "react";
import {
  DynamicModuleLoader,
  type ReducersList
} from "shared/lib/helpers/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

const ProfilePage: FC<{ isStorybook?: boolean }> = memo(
  ({ isStorybook = false }) => {
    const initialReducers: ReducersList = {
      profile: profileReducer,
    };
    const dispatch = useAppDispatch();

    useEffect(() => {
      if (!isStorybook) void dispatch(fetchProfileData());
    }, [dispatch, isStorybook]);

    return (
      <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
        <ProfileCard />
      </DynamicModuleLoader>
    );
  }
);

ProfilePage.displayName = "ProfilePage";

export default ProfilePage;
