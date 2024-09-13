import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Input from "./Input.component";

const meta: Meta<typeof Input> = {
  /**This is the principal call to action? */
  title: "Design System/Atoms/Input",
  component: Input,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Input>;

/**Default input type text */
export const Default: Story = {
  args: {
    type: "text",
    onChange: action("input-changed"),
    placeholder: "Enter your name",
    required: true,
  },
};

/**Input type email is required*/
export const Email: Story = {
  args: {
    type: "email",
    onChange: action("input-changed"),
    placeholder: "Enter email",
    required: true,
  },
};

/**Input type password is required  */
export const Password: Story = {
  args: {
    type: "password",
    onChange: action("input-changed"),
    placeholder: "Enter password",
    required: true,
  },
};

/**Input type password is required  */
export const Tel: Story = {
  args: {
    type: "tel",
    onChange: action("input-changed"),
    placeholder: "Enter telefono",
    required: true,
  },
};

/**Input type search is required  */
export const Search: Story = {
  args: {
    type: "search",
    onChange: action("input-changed"),
    placeholder: "Search",
    required: true,
  },
};
