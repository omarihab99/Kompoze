import { Meta, StoryObj } from "@storybook/react";
import Carousel from "./Carousel";

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  tags: ["autodocs"],
  title: "Carousel",
  argTypes: {
    content: {
      control: "object",
    },

    buttonStyle: {
      control: "select",
      options: ["FullHeight", "Circle"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Carousel>;

export const FullHeight: Story = {
  args: {
    content: [
      <img src="https://placehold.co/2000x500" alt="" />,
      <img src="https://placehold.co/2000x500" alt="" />,
      <img src="https://placehold.co/2000x500" alt="" />,
    ],
    buttonStyle: "FullHeight",
  },
};
// export const Circle: Story = {
//   args: {
//     content: [
//       <div>
//         <img src="https://placehold.co/2000x500" alt="" />
//         <img src="https://placehold.co/2000x500" alt="" />

//         <img src="https://placehold.co/2000x500" alt="" />
//       </div>,
//     ],
//     buttonStyle: "Circle",
//   },
// };
