import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { ThemeDecorator } from "shared/config/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/Decorators/StoreDecorator";

const meta = {
  title: "widgets/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
};

export const Auth: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: { id: 1, username: "" } } }),
  ],
  args: {},
};
