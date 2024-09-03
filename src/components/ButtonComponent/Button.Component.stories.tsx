// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./Button.component";

const meta: Meta<typeof Button> = {
  /**This is the principal call to action? */
  title: "Design System/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

/**the primary button style used to guide users for forward in a flow. Use only one per page */
export const Primary: Story = {
  args: {
    type: "primary",
    text: "Registrarse",
    onClick: action("Primary button clicked!"),
  },
};

/**Secondary button styled used more frequently for secondary actions */
export const Secondary: Story = {
  args: {
    type: "secondary",
    text: "Editar",
    onClick: action("Secondary button clicked"),
  },
};

/**Ghost button styled used for actions that are less critical without drawing too much attention or for navigation  */
export const Ghost: Story = {
  args: {
    type: "ghost",
    text: "Más opciones",
    onClick: action("Ghost button clicked"),
  },
};
