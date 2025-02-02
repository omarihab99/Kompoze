import { Meta, StoryObj } from "@storybook/react";

import PinInput from "./PinInput";

const meta: Meta<typeof PinInput> = {
  component: PinInput,
  tags: ["autodocs"],
  title: "PinInput",
  argTypes: {
    actionFn: {
      control: "object",
    },
  },
};
export default meta;

type Story = StoryObj<typeof PinInput>;

export const Default: Story = {
  args: {
    actionFn: () => {
      console.log("Click Me");
    },
  },
};
