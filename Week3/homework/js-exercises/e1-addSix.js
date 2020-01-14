'use strict';

function createBase(num1) {
  // Put here your logic...
  function add(num2) {
    return num1 + num2;
  }
  return add;
}

const addSix = createBase(9);
const addSeven = createBase(17);
const addEight = createBase(28);

// Put here your function calls...
console.log(addSix(6));
console.log(addSeven(7));
console.log(addEight(8));
