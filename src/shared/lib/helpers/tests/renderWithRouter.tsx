import { render, type RenderOptions } from "@testing-library/react";
import { StoreProvider } from "app/providers/StoreProvider";
import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { type ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTests from "shared/config/i18n/i18nForTests";

interface RenderWithRouterOptions {
  path?: string;
  initialState?: StateSchema;
}

export default function renderWithRouter(
  component: ReactNode,
  options?: RenderWithRouterOptions
): RenderOptions {
  return render(
    <StoreProvider initialState={options?.initialState}>
      <I18nextProvider i18n={i18nForTests}>
        <MemoryRouter initialEntries={[options?.path ?? "/"]}>
          {component}
        </MemoryRouter>
      </I18nextProvider>
    </StoreProvider>
  );
}
