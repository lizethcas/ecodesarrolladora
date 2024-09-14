// .storybook/RouterDecorator.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import type { Decorator } from '@storybook/react';

const RouterDecorator: Decorator = (Story) => (
  <Router>
    <Story />
  </Router>
);

export default RouterDecorator;
