// Snippet
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);
// here we are calling the global variable, thus the answer =9.
// if we want the function, we should console.log(f1(x)) or store it in a variable.

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);
// Here we are changing a specific value within a key in the original variable using the dot notation.
// therefore the answer within will change.
