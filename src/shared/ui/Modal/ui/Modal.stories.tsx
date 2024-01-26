import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Modal } from "./Modal";

const meta = {
  title: "shared/Modal",
  component: Modal,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalLight: Story = {
  args: {
    children:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, esse, quidem reiciendis voluptates eaque unde obcaecati minima, odio excepturi consequatur molestias beatae aliquam mollitia nihil culpa cum. Distinctio, ex neque.",
    isOpen: true,
  },
};
export const ModalDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    children:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, esse, quidem reiciendis voluptates eaque unde obcaecati minima, odio excepturi consequatur molestias beatae aliquam mollitia nihil culpa cum. Distinctio, ex neque.",
    isOpen: true,
  },
};
