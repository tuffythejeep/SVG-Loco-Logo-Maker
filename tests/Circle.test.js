const Circle = require("../lib/Circle");

describe("Circle", () => {
  it("renders a circle with the correct color", () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toMatchSnapshot();
  });

  it("renders a circle with the correct radius", () => {
    const circle = new Circle();
    circle.setRadius(30);
    expect(circle.render()).toMatchSnapshot();
  });

  it("renders a circle with default color and size", () => {
    const circle = new Circle();
    expect(circle.render()).toMatchSnapshot();
  });

  it("renders a circle with invalid color", () => {
    const circle = new Circle();
    circle.setColor("invalid-color");
    expect(circle.render()).toThrowError();
  });

  it("renders a circle with invalid size", () => {
    const circle = new Circle();
    circle.setRadius("invalid-size");
    expect(circle.render()).toThrowError();
  });

  it("sets color correctly", () => {
    const circle = new Circle();
    circle.setColor("red");
    expect(circle.getColor()).toBe("red");
  });

  it("sets size correctly", () => {
    const circle = new Circle();
    circle.setRadius(40);
    expect(circle.getRadius()).toBe(40);
  });
});