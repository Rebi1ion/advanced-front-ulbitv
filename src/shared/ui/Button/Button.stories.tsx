import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonThemes } from "./Button";
import { ThemeDecorator } from "shared/config/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};

export const Clear: Story = {
  args: {
    children: "Text",
    theme: ButtonThemes.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: "Text",
    theme: ButtonThemes.OUTLINE,
  },
};

export const ClearDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],

  args: {
    children: "Text",
    theme: ButtonThemes.CLEAR,
  },
};

export const OutlineDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],

  args: {
    children: "Text",
    theme: ButtonThemes.OUTLINE,
  },
};
