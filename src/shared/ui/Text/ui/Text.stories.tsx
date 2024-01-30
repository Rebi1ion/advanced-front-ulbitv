import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextTheme } from "./Text";
import { ThemeDecorator } from "shared/config/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnlyText: Story = {
  args: {
    text: "Text",
  },
};

export const OnlyTitle: Story = {
  args: {
    title: "Title",
  },
};

export const TextTitle: Story = {
  args: {
    title: "Title",
    text: "Text",
  },
};

export const TextTitleError: Story = {
  args: {
    title: "Title",
    text: "Text",
    theme: TextTheme.ERROR,
  },
};

export const TextTitleDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    title: "Title",
    text: "Text",
  },
};
