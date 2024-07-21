const Square = require("../lib/Square");

describe("Square", () => {
  it("renders a square with the correct color", () => {
    const square = new Square();
    square.setColor("green");
    expect(square.render()).toMatchSnapshot();
  });

  it("renders a square with the correct size", () => {
    const square = new Square();
    square.setSize(50);
    expect(square.render()).toMatchSnapshot();
  });

  it("renders a square with default color and size", () => {
    const square = new Square();
    expect(square.render()).toMatchSnapshot();
  });

  it("renders a square with invalid color", () => {
    const square = new Square();
    square.setColor("invalid-color");
    expect(square.render()).toThrowError();
  });

  it("renders a square with invalid size", () => {
    const square = new Square();
    square.setSize("invalid-size");
    expect(square.render()).toThrowError();
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