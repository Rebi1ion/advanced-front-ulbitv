import { ValidateProfileErrors, type Profile } from "../../types/profileSchema";

export const validateProfileData = (
  profile?: Profile
): ValidateProfileErrors[] => {
  const errors = [];
  if (profile === undefined) errors.push(ValidateProfileErrors.NO_DATA);

  if (!(Boolean(profile?.first) && Boolean(profile?.lastname))) {
    errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
  }

  if (
    profile?.age === undefined ||
    (profile?.age !== undefined && isNaN(profile?.age)) ||
    profile?.age > 200 ||
    profile.age < 1
  ) {
    errors.push(ValidateProfileErrors.INCORRECT_AGE);
  }

  if (profile?.city === undefined) {
    errors.push(ValidateProfileErrors.INCORRECT_CITY);
  }

  return errors;
};
