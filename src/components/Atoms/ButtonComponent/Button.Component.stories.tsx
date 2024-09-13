import type { Meta, StoryObj } from '@storybook/react';
import ButtonComponent from './Button.component';
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof ButtonComponent> = {
  /**This is the principal call to action? */
  title: "Design System/Atoms/Button",
  component: ButtonComponent,
  tags: ["autodocs"],

};
export default meta;


type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    label: "Click Me!",
    variant: "primary",
    onClick: action("button clicked"),

  },
};

export const secondary: Story = {
  args: {
    label: "Click Me!",
    variant: "secondary",
    onClick: action("button clicked"),
    
  },
};
