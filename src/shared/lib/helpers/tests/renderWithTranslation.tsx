import { render, type RenderOptions } from "@testing-library/react";
import { type ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "shared/config/i18n/i18nForTests";

export default function renderWithTranslation(
  component: ReactNode
): RenderOptions {
  return render(
    <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
  );
}
