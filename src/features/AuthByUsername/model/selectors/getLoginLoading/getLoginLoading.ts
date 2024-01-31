import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { type LoginSchema } from "../../types/loginSchema";

export const getLoginLoading = (state: StateSchema): LoginSchema["isLoading"] =>
  state.login?.isLoading ?? false;
