const Circle = require("../lib/Circle");

describe("Circle", () => {
  it("should render a circle with the correct color", () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toBe(
      '<circle cx="150" cy="100" r="50" fill="blue" />'
    );
  });

  it("should set the color correctly", () => {
    const circle = new Circle();
    circle.setColor("red");
    expect(circle.color).toBe("red");
  });
});
