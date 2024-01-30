// entity User отвечает за то, авторизован ли пользователь и хранит данные о пользователе

export { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
export { userReducer, userActions } from "./model/slices/userSlice";
export type { UserSchema } from "./model/types/userSchema";
