import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";
import { ThemeDecorator } from "shared/config/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "widgets/Navbar",
  component: Navbar,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavbarLight: Story = {
  args: {},
};
export const NavbarDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
};
