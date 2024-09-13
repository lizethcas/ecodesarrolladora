import type { Meta, StoryObj } from '@storybook/react';

import HeaderOrganism from './Header.organism';

const meta = {
  component: HeaderOrganism,
} satisfies Meta<typeof HeaderOrganism>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};