import type { Meta, StoryObj } from "@storybook/react";
import { SelectCountry } from "./SelectCountry";

const meta = {
  title: "entities/SelectCountry",
  component: SelectCountry,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof SelectCountry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Страна",
    readonly: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Страна",
    readonly: true,
  },
};
