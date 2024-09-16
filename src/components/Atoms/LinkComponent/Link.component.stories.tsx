import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import LinkComponent from './Link.component';

const meta = {
  title: "Design System/Atoms/Link",
  component: LinkComponent,
} satisfies Meta<typeof LinkComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    to: "to",
    label: "label",
    onClick: action("link-clicked")
  }
};