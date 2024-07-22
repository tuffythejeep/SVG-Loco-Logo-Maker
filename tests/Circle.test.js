const Circle = require("../lib/Circle");

describe("Circle", () => {
  it("renders a circle with the correct color", () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toEqual('<circle fill="blue" />'); // Adjust according to actual render output
  });

  it("renders a circle with the correct radius", () => {
    const circle = new Circle();
    circle.setRadius(30);
    expect(circle.render()).toEqual('<circle r="30" />'); // Adjust according to actual render output
  });

  it("renders a circle with default color and size", () => {
    const circle = new Circle();
    expect(circle.render()).toMatchSnapshot();
  });

  it("handles invalid color gracefully", () => {
    const circle = new Circle();
    circle.setColor("invalid-color");
    expect(circle.getColor()).not.toBe("invalid-color"); // Ensure it defaults or remains unchanged
  });

  it("handles invalid size gracefully", () => {
    const circle = new Circle();
    circle.setRadius("invalid-size");
    expect(circle.getRadius()).not.toBe("invalid-size"); // Ensure it defaults or remains unchanged
  });

  it("sets color correctly", () => {
    const circle = new Circle();
    circle.setColor("red");
    expect(circle.getColor()).toBe("red");
  });

  it("sets radius correctly", () => {
    const circle = new Circle();
    circle.setRadius(40);
    expect(circle.getRadius()).toBe(40);
  });
});
