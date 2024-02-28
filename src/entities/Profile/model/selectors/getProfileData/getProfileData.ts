import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { type Profile } from "../../types/profileSchema";

export const getProfileData = (state: StateSchema): Profile | undefined =>
  state.profile?.data;
