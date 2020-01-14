'use strict';

// i am not so sure of what is needed here, assignment explanation was not sufficiant.
// callbacks functions where not explained so i improvised.
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  let numbers = [];

  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }

  numbers.forEach(function(number) {
    if (number % 3 === 0) {
      return threeCallback();
    }
    if (number % 5 === 0) {
      return fiveCallback();
    }
  });
}

function threeCallback() {
  console.log(`Divisible by 3`);
}

function fiveCallback() {
  console.log('Divisible by 5');
}

threeFive(10, 15, threeCallback, fiveCallback);
