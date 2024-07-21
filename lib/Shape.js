class Shape {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    throw new Error("Must be implemented by subclass");
  }
}

module.exports = Shape;