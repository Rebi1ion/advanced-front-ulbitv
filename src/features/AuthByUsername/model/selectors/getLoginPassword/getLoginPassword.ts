import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { type LoginSchema } from "../../types/loginSchema";

export const getLoginPassword = (state: StateSchema): LoginSchema["password"] =>
  state.login?.password ?? "";
