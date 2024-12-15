import { Meta, StoryObj } from "@storybook/react";
import Notification from "./Notification";
const meta: Meta<typeof Notification> = {
  component: Notification,
  tags: ["autodocs"],
  title: "Notification",
  argTypes: {
    message: {
      control: "text",
    },
    notificationType: {
      control: "select",
      options: ["Success", "Error", "Warning"],
    },
    animation: {
      control: "select",
      options: ["FromRight", "FromBottom", "FadeIn"],
    },
    showIcon: {
      control: "boolean",
    },
    icon: {
      control: "object",
    },
  },
};
export default meta;
type Story = StoryObj<typeof Notification>;

export const Success: Story = {
  args: {
    notificationType: "Success",
    message: "Success",
    animation: "FromRight",
    showIcon: true,
  },
};
export const Error: Story = {
  args: {
    notificationType: "Error",
    message: "Error",
    animation: "FromBottom",
    showIcon: true,
  },
};
export const Warning: Story = {
  args: {
    notificationType: "Warning",
    message: "Warning",
    animation: "FadeIn",
    showIcon: true,
  },
};
export const longMessage: Story = {
  args: {
    notificationType: "Success",
    message:
      "This is a long message that will be not truncated to fit in the notification",
    animation: "FromRight",
    showIcon: true,
  },
};
