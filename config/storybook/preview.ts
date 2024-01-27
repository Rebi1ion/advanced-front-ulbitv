import type { Preview } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { RouterDecorator } from "shared/config/Decorators/RouterDecorator";
import { StoreDecorator } from "shared/config/Decorators/StoreDecorator";
import { StyleDecorator } from "shared/config/Decorators/StyleDecorator";
import { ThemeDecorator } from "shared/config/Decorators/ThemeDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator, StoreDecorator],
};

export default preview;
