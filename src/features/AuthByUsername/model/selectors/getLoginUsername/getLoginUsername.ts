import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { type LoginSchema } from "../../types/loginSchema";

export const getLoginUsername = (state: StateSchema): LoginSchema["username"] =>
  state?.login?.username ?? "";
