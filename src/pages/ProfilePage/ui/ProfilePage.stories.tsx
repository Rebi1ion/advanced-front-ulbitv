import type { Meta, StoryObj } from "@storybook/react";
import ProfilePage from "./ProfilePage";
import { ThemeDecorator } from "shared/config/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/Decorators/StoreDecorator";
import { type Profile } from "entities/Profile";
import { Countries } from "entities/SelectCountry/model/types/country";
import { Currency } from "entities/SelectCurrency/model/types/currency";
import ProfileImage from "shared/assets/profile-img.jpg";

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
  avatar: ProfileImage,
};

const profileState = {
  profile: {
    isLoading: false,
    data: profile,
    form: profile,
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
