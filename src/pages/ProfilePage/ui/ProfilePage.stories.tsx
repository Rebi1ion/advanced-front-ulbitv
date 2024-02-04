import type { Meta, StoryObj } from "@storybook/react";
import ProfilePage from "./ProfilePage";
import { ThemeDecorator } from "shared/config/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/Decorators/StoreDecorator";

const meta = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  parameters: {},
  argTypes: {},
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfilePageLight: Story = {
  args: {},
};
export const ProfilePageDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
};
