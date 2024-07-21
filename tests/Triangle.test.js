const Triangle = require("../lib/Triangle");

describe("Triangle", () => {
  it("renders a triangle with the correct color", () => {
    const triangle = new Triangle();
    triangle.setColor("red");
    expect(triangle.render()).toMatchSnapshot();
  });

  it('renders a triangle with default color and size', () => {
    const triangle = new Triangle();
    expect(triangle.render()).toMatchSnapshot();
  });

  it('renders a triangle with invalid color', () => {
    const triangle = new Triangle();
    triangle.setColor('invalid-color');
    expect(triangle.render()).toThrowError();
  });

  it('renders a triangle with invalid size', () => {
    const triangle = new Triangle();
    triangle.setSize('invalid-size');
    expect(triangle.render()).toThrowError();
  });

  it('sets color correctly', () => {
    const triangle = new Triangle();
    triangle.setColor('red');
    expect(triangle.getColor()).toBe('red');
  });

  it('sets size correctly', () => {
    const triangle = new Triangle();
    triangle.setSize(40);
    expect(triangle.getSize()).toBe(40);
  });
});