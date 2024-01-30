import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { type User } from "../../types/userSchema";

export const getUserAuthData = (state: StateSchema): User | undefined =>
  state.user.authData;
