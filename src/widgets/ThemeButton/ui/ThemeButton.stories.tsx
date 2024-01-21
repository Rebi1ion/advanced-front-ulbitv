import type { Meta, StoryObj } from "@storybook/react";
import { ThemeButton } from "./ThemeButton";
import { ThemeDecorator } from "shared/config/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "widgets/ThemeButton",
  component: ThemeButton,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof ThemeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemeButtonLight: Story = {
  args: {},
};
export const ThemeButtonDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
};
