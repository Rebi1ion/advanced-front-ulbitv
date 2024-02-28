import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { type ValidateProfileErrors } from "../../types/profileSchema";

export const getValidateProfileErorrs = (
  state: StateSchema
): ValidateProfileErrors[] | undefined =>
  state.profile?.validateProfileError ?? undefined;
