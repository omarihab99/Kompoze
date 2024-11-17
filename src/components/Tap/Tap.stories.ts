import { Meta, StoryObj } from '@storybook/react';
import Tap from "./Tap";
const meta: Meta<typeof Tap> = {
    component: Tap,
    tags: ['autodocs'],
    title: 'Tap',
    argTypes: {
        text: {
            control: 'text',
        },
        isActive: {
            control: 'boolean',
        },
    },
}
export default meta;
type Story = StoryObj<typeof Tap>;

export const Active: Story = {
    args: {
        text: 'HTML',
        isActive: true,
    },
};
export const Inactive: Story = {
    args: {
        text: 'HTML',
        isActive: false,
    },
};