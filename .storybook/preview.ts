import type { Preview } from "@storybook/react";
import "../src/index.css";
import { MINIMAL_VIEWPORTS  } from "@storybook/addon-viewport";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: MINIMAL_VIEWPORTS ,
    },
  },
};

export default preview;
