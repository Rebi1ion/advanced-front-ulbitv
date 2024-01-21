import type { Meta, StoryObj } from "@storybook/react";
import AboutPage from "./AboutPage";
import { ThemeDecorator } from "shared/config/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "pages/AboutPage",
  component: AboutPage,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AboutPageLight: Story = {
  args: {},
};
export const AboutPageDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
};
