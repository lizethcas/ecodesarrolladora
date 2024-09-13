import type { Meta, StoryObj } from '@storybook/react';
import ButtonComponent from './Button.component';
import { action } from "@storybook/addon-actions";
import { iconsLibrary } from '../../IconLibrary/IconLibrary';



const meta: Meta<typeof ButtonComponent> = {
  title: "Design System/Atoms/Button",
  component: ButtonComponent,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: Object.keys(iconsLibrary), // Usa las claves de iconsLibrary como opciones
      },
      description: 'Icon to be displayed inside the button',
    },
    iconStyles: {
      control: 'object',
      description: 'Props to pass to the icon component',
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Click Me!",
    variant: "primary",
    onClick: action("button clicked"),
    size:"m",
    icon: 'users', // Usa la clave del ícono
    iconStyles: { size: '', color: '' }, // Propiedades adicionales para el ícono
  },
};

export const Secondary: Story = {
  args: {
    label: "Click Me!",
    variant: "secondary",
    onClick: action("button clicked"),
  },
};
