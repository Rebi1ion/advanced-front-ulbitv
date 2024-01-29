import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { ThemeDecorator } from "shared/config/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Input",
  component: Input,
  parameters: {},
  argTypes: {},
  args: {
    autoFocus: true,
    placeholder: "Логин",
    type: "text",
    value: "qwerty",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputLight: Story = {
  args: {},
};
export const InputDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
};
