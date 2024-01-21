import type { Meta, StoryObj } from "@storybook/react";
import MainPage from "./MainPage";
import { ThemeDecorator } from "shared/config/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "pages/MainPage",
  component: MainPage,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainPageLight: Story = {
  args: {},
};
export const MainPageDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
};
