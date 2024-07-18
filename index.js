// index.js
const main = require("./main");
const main2 = require("./main2");

async function __main__() {
  main();
  await sleep(1000);
  main2();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
  await __main__();
})();
