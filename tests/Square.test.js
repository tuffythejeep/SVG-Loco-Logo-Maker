const Square = require("../lib/Square");

describe("Square", () => {
  it("should render a square with the correct color", () => {
    const square = new Square();
    square.setColor("blue");
    expect(square.render()).toBe(
      '<rect x="100" y="50" width="100" height="100" fill="blue" />'
    );
  });

  it("should set the color correctly", () => {
    const square = new Square();
    square.setColor("orange");
    expect(square.color).toBe("orange");
  });
});
