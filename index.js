const inquirer = require("inquirer");
const fs = require("fs");

const Triangle = require("./lib/Triangle");
const Circle = require("./lib/Circle");
const Square = require("./lib/Square");

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for your LOGO!!:",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["Triangle", "Circle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a color keyword (or hexadecimal number) for your SHAPE:",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a color keyword (or hexadecimal number) for the TEXT:",
    },
  ])
  .then((answers) => {
    let shape;
    switch (answers.shape) {
      case "Triangle":
        shape = new Triangle();
        break;
      case "Circle":
        shape = new Circle();
        break;
      case "Square":
        shape = new Square();
        break;
      default:
        console.error("Invalid shape selected");
        return;
    }
    shape.setColor(answers.shapeColor);
    const svg = `<svg width="300" height="200">${shape.render()}</svg>`;
    fs.writeFileSync("logo.svg", svg);
    console.log("Generated logo.svg");
  });
