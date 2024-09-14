// src/components/organisms/HeaderOrganism/Header.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import Header from './Header.organism';
import { BrowserRouter as Router } from 'react-router-dom';

// Define el metadata para la historia
const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
};

export default meta;

// Define una plantilla para las historias
const Template: StoryFn = () => <Header />;

// Exporta la historia predeterminada
export const Default = Template.bind({});
Default.args = {
  // Aquí puedes establecer props predeterminadas si las hay
};
