import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import AvatarImg from "shared/assets/profile-img.jpg";

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
    src: AvatarImg,
  },
};

export const Small: Story = {
  args: {
    src: AvatarImg,
    size: 50,
  },
};
