import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/Decorators/StoreDecorator";
import { type Profile, ProfileCard } from "entities/Profile";
import { Countries } from "entities/SelectCountry/model/types/country";
import { Currency } from "entities/SelectCurrency/model/types/currency";
import ProfileImage from "shared/assets/profile-img.jpg";
import { ThemeDecorator } from "shared/config/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "entities/ProfileCard",
  component: ProfileCard,
  parameters: {},
  argTypes: {},
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof ProfileCard>;

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

export const Light: Story = {
  decorators: [StoreDecorator(profileState)],
  args: { data: profile },
};

export const Dark: Story = {
  decorators: [StoreDecorator(profileState), ThemeDecorator(Theme.DARK)],
  args: { data: profile },
};

export const Pending: Story = {
  decorators: [StoreDecorator(profileState)],
  args: { isLoading: true },
};

export const Error: Story = {
  decorators: [StoreDecorator(profileState)],
  args: { error: "error" },
};
