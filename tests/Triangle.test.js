const Triangle = require("../lib/Triangle");

describe("Triangle", () => {
  it("should render a triangle with the correct color", () => {
    const triangle = new Triangle();
    triangle.setColor("green");
    expect(triangle.render()).toBe(
      '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
    );
  });

  it("should set the color correctly", () => {
    const triangle = new Triangle();
    triangle.setColor("yellow");
    expect(triangle.color).toBe("yellow");
  });
});
