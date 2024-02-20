import type { Meta, StoryObj } from "@storybook/react";
import ProfilePage from "./ProfilePage";
import { ThemeDecorator } from "shared/config/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/Decorators/StoreDecorator";
import { type Profile } from "entities/Profile";
import { Countries, Currency } from "shared/const/common";

const meta = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  parameters: {},
  argTypes: {},
  args: { isStorybook: true },
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

const profile: Profile = {
  first: "Qwerty",
  lastname: "Asdfgh",
  age: 19,
  currency: Currency.RUB,
  country: Countries.Russia,
  city: "Moscow",
  username: "admin",
  avatar:
    "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
};

const profileState = {
  profile: {
    isLoading: false,
    data: profile,
    error: "",
    readonly: true,
  },
};

export const ProfilePageLight: Story = {
  decorators: [StoreDecorator(profileState)],
  args: {},
};
export const ProfilePageDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator(profileState)],
  args: {},
};
