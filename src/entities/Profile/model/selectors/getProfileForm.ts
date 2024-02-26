import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { type Profile } from "../types/profileSchema";

export const getProfileForm = (state: StateSchema): Profile | undefined =>
  state.profile?.form;
