import classNames from "./classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("with additional classes", () => {
    expect(classNames("someClass", {}, ["add1", "add2"])).toBe(
      "someClass add1 add2"
    );
  });

  test("with additional and true mods classes", () => {
    const expected = "someClass add1 add2 hidden visible";
    expect(
      classNames("someClass", { hidden: true, visible: true }, ["add1", "add2"])
    ).toBe(expected);
  });

  test("with additional and true & false mods classes", () => {
    const expected = "someClass add1 add2 hidden";
    expect(
      classNames("someClass", { hidden: true, visible: false }, [
        "add1",
        "add2",
      ])
    ).toBe(expected);
  });

  test("with additional and true & undefined mods classes", () => {
    const expected = "someClass add1 add2 hidden";
    expect(
      classNames("someClass", { hidden: true, visible: undefined }, [
        "add1",
        "add2",
      ])
    ).toBe(expected);
  });
});
