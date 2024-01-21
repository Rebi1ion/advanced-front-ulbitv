import type { Meta, StoryObj } from "@storybook/react";
import { ErrorPage } from "./ErrorPage";
import { ThemeDecorator } from "shared/config/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "widgets/ErrorPage",
  component: ErrorPage,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ErrorPageLight: Story = {
  args: {},
};
export const ErrorPageDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
};
