const Shape = require("./lib/Shape.js");

class Square extends Shape {
  render() {
    return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
  }
}
