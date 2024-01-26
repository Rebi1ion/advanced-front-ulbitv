import { type StoryFn } from "@storybook/react";
import { type Theme } from "app/providers/ThemeProvider";
import { type ReactElement } from "react";

export function ThemeDecorator(theme: Theme) {
  return function StoryComponent(Story: StoryFn): ReactElement {
    document.body.className = theme;
    return <Story />;
  };
}
