const Triangle = require("../lib/Triangle");

describe("Triangle", () => {
  it("renders a triangle with the correct color", () => {
    const triangle = new Triangle();
    triangle.setColor("red");
    expect(triangle.render()).toEqual('<polygon fill="red" />'); // Adjust according to actual render output
  });

  it("renders a triangle with default color and size", () => {
    const triangle = new Triangle();
    expect(triangle.render()).toMatchSnapshot();
  });

  it("handles invalid color gracefully", () => {
    const triangle = new Triangle();
    triangle.setColor("invalid-color");
    expect(triangle.getColor()).not.toBe("invalid-color"); // Ensure it defaults or remains unchanged
  });

  it("handles invalid size gracefully", () => {
    const triangle = new Triangle();
    triangle.setSize("invalid-size");
    expect(triangle.getSize()).not.toBe("invalid-size"); // Ensure it defaults or remains unchanged
  });

  it("sets color correctly", () => {
    const triangle = new Triangle();
    triangle.setColor("red");
    expect(triangle.getColor()).toBe("red");
  });

  it("sets size correctly", () => {
    const triangle = new Triangle();
    triangle.setSize(40);
    expect(triangle.getSize()).toBe(40);
  });
});
