import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";
import { ThemeDecorator } from "shared/config/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/Decorators/StoreDecorator";

const meta = {
  title: "features/LoginForm",
  component: LoginForm,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginFormLight: Story = {
  decorators: [
    StoreDecorator({
      login: { username: "qwerty", password: "123", isLoading: false },
    }),
  ],
  args: {},
};
export const LoginFormDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      login: { username: "qwerty", password: "123", isLoading: false },
    }),
  ],

  args: {},
};

export const LoginFormLoading: Story = {
  decorators: [
    StoreDecorator({
      login: { username: "qwerty", password: "123", isLoading: true },
    }),
  ],
  args: {},
};

export const LoginFormError: Story = {
  decorators: [
    StoreDecorator({
      login: {
        username: "qwerty",
        password: "123",
        error: "error",
        isLoading: false,
      },
    }),
  ],
  args: {},
};
