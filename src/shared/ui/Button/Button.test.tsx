import { render } from "@testing-library/react";
import { Button, ButtonThemes } from "shared/ui/Button/Button";

describe("Test <Button/>", () => {
  test("render button component", () => {
    const { getByText } = render(<Button>test</Button>);
    expect(getByText("test")).toBeInTheDocument();
  });

  test("clear theme on <Button/>", () => {
    const { getByText } = render(
      <Button theme={ButtonThemes.CLEAR}>test</Button>
    );
    expect(getByText("test")).toHaveClass("clear");
  });
});
