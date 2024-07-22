const inquirer = require("inquirer");
const fs = require("fs");
const Shape = require("./lib/Shape.js");
const Triangle = require("./lib/Triangle.js");
const Circle = require("./lib/Circle.js");
const Square = require("./lib/Square.js");

const shapeClasses = {
  Triangle,
  Circle,
  Square,
};

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
    const ShapeClass = shapeClasses[answers.shape];
    const shape = new ShapeClass();
    shape.setColor(answers.shapeColor);

    const svg = `
      <svg width="300" height="200">
        ${shape.render()}
        <text x="150" y="100" font-size="40" text-anchor="middle" fill="${
          answers.textColor
        }">
          ${answers.text}
        </text>
      </svg>
    `;

    fs.writeFileSync("logo.svg", svg);
    console.log("Generated logo.svg");
  });
