import { Meta, StoryObj } from "@storybook/react";
import PollWidget from "./PollWidget";

const meta: Meta<typeof PollWidget> = {
    component: PollWidget,
    tags: ["autodocs"],
    title: "PollWidget",
    argTypes: {
        question: {
            control: "text",
        },
        options: {
            control: "object",
        },
        onVote: {
            control: "object",
        },
        userVote: {
            control: "text",
        },
    },
};
export default meta;

type Story = StoryObj<typeof PollWidget>;

export const PollWithOptions: Story = {
    args: {
        question: "What is your favorite language?",
        options: [
            { id: 1, text: "Javascript", votes: 2 },
            { id: 2, text: "Typescript", votes: 200 },
        ],
        onVote: (option) => console.log(option),
    },
};

export const PollWithResults: Story = {
    args: {
        question: "What is your favorite language?",
        options: [
            { id: 1, text: "Javascript", votes: 2 },
            { id: 2, text: "Typescript", votes: 200 },
            { id: 3, text: "C++", votes: 100 },
            { id: 4, text: "Rust", votes: 500 },

        ],
        onVote: (option) => console.log(option),
        userVote: "Javascript",
    },
};