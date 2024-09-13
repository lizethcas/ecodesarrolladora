import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // Ajusta esta línea para que Storybook busque archivos de historias en los mismos directorios que los componentes
  stories: ["../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    '@storybook/addon-viewport',
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
    '@storybook/addon-a11y'
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;
