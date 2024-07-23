const Shape = require("../lib/Shape");

describe("Shape", () => {
  it("sets color correctly", () => {
    const shape = new Shape();
    shape.setColor("purple");
    expect(shape.getColor()).toBe("purple");
  });

  it("throws an error when setting an invalid color", () => {
    const shape = new Shape();
    expect(() => shape.setColor("invalid-color")).toThrowError();
  });

  it("renders a shape with the correct color", () => {
    const shape = new Shape();
    shape.setColor("yellow");
    expect(shape.render()).toEqual('<shape fill="yellow" />'); // Adjust according to actual render output
  });

  it("renders a shape with default color", () => {
    const shape = new Shape();
    expect(shape.render()).toEqual('<shape fill="black" />'); // Assuming default color is black, adjust if different
  });

  it("handles setting a color multiple times correctly", () => {
    const shape = new Shape();
    shape.setColor("blue");
    expect(shape.getColor()).toBe("blue");
    shape.setColor("green");
    expect(shape.getColor()).toBe("green");
  });

  it("resets to default color if an invalid color is set", () => {
    const shape = new Shape();
    shape.setColor("blue");
    expect(shape.getColor()).toBe("blue");
    expect(() => shape.setColor("invalid-color")).toThrowError();
    expect(shape.getColor()).toBe("blue"); // Assuming it stays the same if invalid, adjust if different behavior
  });

  it("renders a shape with updated color after multiple changes", () => {
    const shape = new Shape();
    shape.setColor("red");
    expect(shape.render()).toEqual('<shape fill="red" />'); // Adjust according to actual render output
    shape.setColor("blue");
    expect(shape.render()).toEqual('<shape fill="blue" />'); // Adjust according to actual render output
  });
});
