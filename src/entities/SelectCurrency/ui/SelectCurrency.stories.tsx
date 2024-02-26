import type { Meta, StoryObj } from "@storybook/react";
import { SelectCurrency } from "./SelectCurrency";

const meta = {
  title: "entities/SelectCurrency",
  component: SelectCurrency,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof SelectCurrency>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Валюта",
    readonly: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Валюта",
    readonly: true,
  },
};
