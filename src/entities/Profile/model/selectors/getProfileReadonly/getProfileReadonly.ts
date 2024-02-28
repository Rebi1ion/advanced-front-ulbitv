import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getProfileReadonly = (state: StateSchema): boolean =>
  state.profile?.readonly ?? true;
