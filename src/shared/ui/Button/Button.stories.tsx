import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSizes, ButtonThemes } from "./Button";
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

export const PrimaryBgTheme: Story = {
  args: {
    children: "Text",
    theme: ButtonThemes.BACKGROUND,
  },
};

export const PrimaryBgThemeDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],

  args: {
    children: "Text",
    theme: ButtonThemes.BACKGROUND,
  },
};

export const InvertedBgTheme: Story = {
  args: {
    children: "Text",
    theme: ButtonThemes.INVERTED_BACKGROUND,
  },
};

export const InvertedBgThemeDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],

  args: {
    children: "Text",
    theme: ButtonThemes.INVERTED_BACKGROUND,
  },
};

export const InvertedColors: Story = {
  args: {
    children: "Text",
    theme: ButtonThemes.INVERTED_BACKGROUND,

    invertedColors: true,
  },
};

export const InvertedColorsDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],

  args: {
    children: "Text",
    theme: ButtonThemes.INVERTED_BACKGROUND,
    invertedColors: true,
  },
};

export const SquareSizeS: Story = {
  args: {
    children: ">",
    theme: ButtonThemes.INVERTED_BACKGROUND,
    square: true,
    size: ButtonSizes.S,
  },
};

export const SquareSizeSDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],

  args: {
    children: ">",
    theme: ButtonThemes.INVERTED_BACKGROUND,
    square: true,
    size: ButtonSizes.S,
  },
};

export const SquareSizeM: Story = {
  args: {
    children: ">",
    theme: ButtonThemes.INVERTED_BACKGROUND,
    square: true,
    size: ButtonSizes.M,
  },
};

export const SquareSizeMDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],

  args: {
    children: ">",
    theme: ButtonThemes.INVERTED_BACKGROUND,
    square: true,
    size: ButtonSizes.M,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: ">",
    theme: ButtonThemes.INVERTED_BACKGROUND,
    square: true,
    size: ButtonSizes.L,
  },
};

export const SquareSizeLDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],

  args: {
    children: ">",
    theme: ButtonThemes.INVERTED_BACKGROUND,
    square: true,
    size: ButtonSizes.L,
  },
};
