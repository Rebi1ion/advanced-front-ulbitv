import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";
import { ThemeDecorator } from "shared/config/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Loader",
  component: Loader,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoaderLight: Story = {
  args: {},
};
export const LoaderDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
};
