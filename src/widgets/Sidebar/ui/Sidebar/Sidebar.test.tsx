import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar";
import renderWithTranslation from "shared/lib/helpers/tests/renderWithTranslation";

describe("test sidebar", () => {
  test("sidebar render", () => {
    renderWithTranslation(<Sidebar />);
    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).toBeInTheDocument();
  });

  test("toggle sidebar", () => {
    renderWithTranslation(<Sidebar />);

    const sidebarButton = screen.getByTestId("sidebar-button");
    fireEvent.click(sidebarButton);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    screen.debug();
    fireEvent.click(sidebarButton);
    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
    screen.debug();
  });
});
