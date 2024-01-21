import type { Meta, StoryObj } from "@storybook/react";
import { AppLink, AppLinkTheme } from "./AppLink";
import { ThemeDecorator } from "shared/config/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {},
  argTypes: {},
  args: { to: "/" },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
  args: { children: "Text" },
};
export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: { children: "Text", theme: AppLinkTheme.SECONDARY },
};

export const SecondaryLight: Story = {
  args: { children: "Text" },
};
export const SecondaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: { children: "Text", theme: AppLinkTheme.SECONDARY },
};
