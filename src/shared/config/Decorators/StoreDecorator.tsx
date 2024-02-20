import { type ReducersMapObject, type DeepPartial } from "@reduxjs/toolkit";
import { type Decorator } from "@storybook/react";
import { StoreProvider } from "app/providers/StoreProvider";
import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { profileReducer } from "entities/Profile";
import { loginReducer } from "features/AuthByUsername/model/slices/loginSlice";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  login: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator: (
  initialState: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => Decorator = (initialState: StateSchema, asyncReducers) => {
  const storyDecorator: Decorator = (Story) => {
    return (
      <StoreProvider
        initialState={initialState}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <Story />
      </StoreProvider>
    );
  };
  return storyDecorator;
};
