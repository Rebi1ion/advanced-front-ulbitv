import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta = {
  title: "shared/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { value: "123", content: "123" },
      { value: "1234", content: "1234" },
      { value: "12345", content: "12345" },
    ],
    label: "Выберите значение",
    readonly: false,
  },
};

export const Disabled: Story = {
  args: {
    options: [
      { value: "123", content: "123" },
      { value: "1234", content: "1234" },
      { value: "12345", content: "12345" },
    ],
    label: "Выберите значение",
    readonly: true,
  },
};
