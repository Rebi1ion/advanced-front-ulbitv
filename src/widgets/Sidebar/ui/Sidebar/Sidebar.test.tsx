import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar";
import renderWithRouter from "shared/lib/helpers/tests/renderWithRouter";

describe("test sidebar", () => {
  test("sidebar render", () => {
    renderWithRouter(<Sidebar />);
    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).toBeInTheDocument();
  });

  test("toggle sidebar", () => {
    renderWithRouter(<Sidebar />);

    const sidebarButton = screen.getByTestId("sidebar-button");
    fireEvent.click(sidebarButton);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    screen.debug();
    fireEvent.click(sidebarButton);
    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
    screen.debug();
  });
});
