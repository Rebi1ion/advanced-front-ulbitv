import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { type LoginSchema } from "../../types/loginSchema";

export const getLoginState = (state: StateSchema): LoginSchema => state.login;
