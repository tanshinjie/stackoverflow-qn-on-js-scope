// main.js
const { init_a, return_a } = require("./lib");

function main() {
  console.log("[DEBUG] main");
  // init_a();

  a = return_a();
  console.log(a);
}

module.exports = main;
