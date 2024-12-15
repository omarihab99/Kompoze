import { Meta, StoryObj } from "@storybook/react";
import IconButton from "./IconButton";
import { BellRing, Check } from "lucide-react";
const meta: Meta<typeof IconButton> = {
  component: IconButton,
  tags: ["autodocs"],
  title: "IconButton",
  argTypes: {
    defaultIcon: {
      control: "object",
    },
    text: {
      control: "text",
    },
    onClick: {
      control: "object",
    },
    isIconChangeOnClick: {
      control: "boolean",
    },
    onClickIcon: {
      control: "object",
    },
  },
};
export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    defaultIcon: <BellRing />,
    text: "Click",
    onClick: () => {},
    isIconChangeOnClick: true,
    onClickIcon: <Check />,
  },
};
export const lessInterval: Story = {
  args: {
    defaultIcon: <BellRing />,
    text: "Click",
    onClick: () => {
      alert("clicked");
    },
    isIconChangeOnClick: true,
    onClickIcon: <Check />,
    iconClickInterval: 1000,
  },
};
