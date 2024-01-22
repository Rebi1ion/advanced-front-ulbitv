import { type StoryFn } from "@storybook/react";
import { type Theme } from "app/providers/ThemeProvider";
import { type ReactElement } from "react";

// export const ThemeDecorator: (theme: Theme) => Decorator = (theme) => (Story) =>
//   (
//     <div className={`app ${theme}`}>
//       <Story />
//     </div>
//   );

export function ThemeDecorator(theme: Theme) {
  return function StoryComponent(Story: StoryFn): ReactElement {
    return (
      <div className={`app ${theme}`}>
        <Story />
      </div>
    );
  };
}
