// Atoms/Input.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import { iconsLibrary } from '../../IconLibrary/IconLibrary';
import InputComponent from './Input.component';
console.log(Object.keys(iconsLibrary))
// Meta de la historia
const meta = {
  title: "Design System/Atoms/Input",
  component: InputComponent,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: {
        type: 'select',
      },
      options: Object.keys(iconsLibrary),
      description: 'Icon to be displayed inside the button',
    },
    type: {
      control: {
        type: 'select',
      },
      options: ['text','password','tel','email','number','file','radio','range','search','date'],
      description: 'Icon to be displayed inside the button',
    },
    state: {
      options: ['fail'],
      control: { type: 'radio' },
      description: 'State input',
    },
    iconStyles: {
      control: 'object',
      description: 'Props to pass to the icon component (size, color, etc.)',
    },
    showPassword: {
      control: 'boolean',
      description: 'show or hide password',
    },
  },

} satisfies Meta<typeof InputComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

// Historia Success con estado 'success'
export const Success: Story = {

  args: {
    label: "Nombre",
    id: "nombre",
    type: 'text',
    state: 'success',
    placeholder: "Ingresa tu nombre",
    onChange: action("onChange"),
    icon: 'users', // Ícono 'users' de la biblioteca de iconos
    iconStyles: { size: '', color: '' }, // Define el tamaño y color del ícono
  },
};

// Historia con el estado 'fail'
export const Fail: Story = {
  args: {
    label: "Ingresa tu correo",
    state: "fail",
    id: 'password',
    type: "password",
    placeholder: "Correo electrónico",
    onChange: action("onChange"),
    icon: 'email', // Ícono 'email'
    iconStyles: { size: 20, color: '' }, // Color rojo para el ícono en el estado fallido
  },
};
