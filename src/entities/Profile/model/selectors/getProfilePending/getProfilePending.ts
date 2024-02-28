import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getProfilePending = (state: StateSchema): boolean =>
  state.profile?.isLoading ?? false;
