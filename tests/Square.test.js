const Square = require("../lib/Square");

describe("Square", () => {
  it("renders a square with the correct color", () => {
    const square = new Square();
    square.setColor("green");
    expect(square.render()).toEqual('<rect fill="green" />'); // Adjust according to actual render output
  });

  it("renders a square with the correct size", () => {
    const square = new Square();
    square.setSize(50);
    expect(square.render()).toEqual('<rect width="50" height="50" />'); // Adjust according to actual render output
  });

  it("renders a square with default color and size", () => {
    const square = new Square();
    expect(square.render()).toMatchSnapshot();
  });

  it("handles invalid color gracefully", () => {
    const square = new Square();
    square.setColor("invalid-color");
    expect(square.getColor()).not.toBe("invalid-color"); // Ensure it defaults or remains unchanged
  });

  it("handles invalid size gracefully", () => {
    const square = new Square();
    square.setSize("invalid-size");
    expect(square.getSize()).not.toBe("invalid-size"); // Ensure it defaults or remains unchanged
  });

  it("sets color correctly", () => {
    const square = new Square();
    square.setColor("blue");
    expect(square.getColor()).toBe("blue");
  });

  it("sets size correctly", () => {
    const square = new Square();
    square.setSize(60);
    expect(square.getSize()).toBe(60);
  });
});
