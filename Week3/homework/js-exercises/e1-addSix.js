'use strict';

function createBase(num1) {
  // Put here your logic...
  function add(num2) {
    return num1 + num2;
  }
  return add;
}

const addSix = createBase(6);
const addSeven = createBase(7);
const addEight = createBase(8);

// Put here your function calls...
console.log(addSix(9));
console.log(addSeven(17));
console.log(addEight(28));

