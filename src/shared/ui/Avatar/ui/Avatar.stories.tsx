import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta = {
  title: "shared/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
  },
};

export const Small: Story = {
  args: {
    src: "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
    size: 50,
  },
};
