import { Meta, StoryObj } from "@storybook/react";

import Post from "./index";

const meta: Meta<typeof Post> = {
  component: Post,
  tags: ["autodocs"],
  title: "Post",
  argTypes: {
    imgSrc: {
      control: "text",
    },
    name: {
      control: "text",
    },
    date: {
      control: "text",
    },
    content: {
      control: "text",
    },
    onSave: {
      action: "onSave",
    },
    onDelete: {
      action: "onDelete",
    },
    onLike: {
      action: "onLike",
    },
    onComment: {
      action: "onComment",
    },
    onShare: {
      action: "onShare",
    },
    onCopy: {
      action: "onCopy",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Post>;

export const Default: Story = {
  args: {
    imgSrc: "https://placehold.co/10",
    name: "John Doe",
    date: "Tue, 16 Feb 2025",
    content:
      "This is the content of the post that is very long and can be broken into multiple lines that is new lines",
    onSave: (content: string) => {
      alert(content);
    },
    onDelete: () => {
      console.log("Delete");
    },
  },
};
