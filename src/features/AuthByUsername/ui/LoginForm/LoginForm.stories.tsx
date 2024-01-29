import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./LoginForm";
import { ThemeDecorator } from "shared/config/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "features/LoginForm",
  component: LoginForm,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginFormLight: Story = {
  args: {},
};
export const LoginFormDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
};
