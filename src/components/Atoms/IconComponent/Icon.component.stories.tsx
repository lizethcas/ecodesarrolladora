import type { Meta, StoryObj } from '@storybook/react';

import IconComponent from './Icon.component';

const meta = {
  title: "Design System/Atoms/Icon",
  component: IconComponent,
} satisfies Meta<typeof IconComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconName: "icon-facebook"
  }
};