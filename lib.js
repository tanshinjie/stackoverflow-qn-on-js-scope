// lib.js
let a;

function init_a() {
  const init_time = new Date().getTime();
  console.log(`init_a ${init_time}`);
  a = init_time;
}

function return_a() {
  console.log(`return_a`);
  if (!a) {
    console.log(`No a found, creating a new a`);
    init_a();
  }

  console.log(`return_a return`);
  return a;
}

module.exports = {
  init_a,
  return_a,
};
