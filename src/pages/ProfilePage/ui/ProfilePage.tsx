import {
  ProfileCard,
  fetchProfileData,
  getProfileForm,
  getProfileError,
  getProfilePending,
  getProfileReadonly,
  profileActions,
  profileReducer
} from "entities/Profile";
import { memo, type FC, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { type Currency } from "entities/SelectCurrency/model/types/currency";
import {
  DynamicModuleLoader,
  type ReducersList
} from "shared/lib/helpers/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { type Countries } from "entities/SelectCountry";

const ProfilePage: FC<{ isStorybook?: boolean }> = memo(
  ({ isStorybook = false }) => {
    const initialReducers: ReducersList = {
      profile: profileReducer,
    };
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfilePending);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);

    useEffect(() => {
      if (!isStorybook) void dispatch(fetchProfileData());
    }, [dispatch, isStorybook]);

    const onChangeFirstname = useCallback(
      (value?: string) => {
        dispatch(profileActions.updateProfile({ first: value }));
      },
      [dispatch]
    );
    const onChangeLastname = useCallback(
      (value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value }));
      },
      [dispatch]
    );
    const onChangeAge = useCallback(
      (value?: string) => {
        if (value !== undefined && /^[0-9]+$/.test(value)) {
          dispatch(profileActions.updateProfile({ age: Number(value) ?? 0 }));
        }
      },
      [dispatch]
    );
    const onChangeCity = useCallback(
      (value?: string) => {
        dispatch(profileActions.updateProfile({ city: value }));
      },
      [dispatch]
    );
    const onChangeUsername = useCallback(
      (value?: string) => {
        dispatch(profileActions.updateProfile({ username: value }));
      },
      [dispatch]
    );
    const onChangeAvatar = useCallback(
      (value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value }));
      },
      [dispatch]
    );

    const onChangeCurrency = useCallback(
      (value?: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
      },
      [dispatch]
    );

    const onChangeCountry = useCallback(
      (value?: Countries) => {
        dispatch(profileActions.updateProfile({ country: value }));
      },
      [dispatch]
    );

    return (
      <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
        <ProfileCard
          data={formData}
          error={error}
          isLoading={isLoading}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </DynamicModuleLoader>
    );
  }
);

ProfilePage.displayName = "ProfilePage";

export default ProfilePage;
