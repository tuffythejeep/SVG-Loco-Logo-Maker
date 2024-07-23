const Shape = require("../lib/Shape");

describe("Shape", () => {
  it("should set the color correctly", () => {
    const shape = new Shape();
    shape.setColor("purple");
    expect(shape.color).toBe("purple");
  });

  it("should throw an error if render is called on Shape directly", () => {
    const shape = new Shape();
    expect(() => shape.render()).toThrow("Must be implemented by subclass");
  });
});
