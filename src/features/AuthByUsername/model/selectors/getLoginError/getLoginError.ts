import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { type LoginSchema } from "../../types/loginSchema";

export const getLoginError = (state: StateSchema): LoginSchema["error"] =>
  state.login?.error;
