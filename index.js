const inquirer = require("inquirer");
const fs = require("fs");
const Shape = require("./lib/Shape");
const Triangle = require("./lib/Triangle");
const Circle = require("./lib/Circle");
const Square = require("./lib/Square");

inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for your LOGO!!:'
  },
