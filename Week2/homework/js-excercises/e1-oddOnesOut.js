'use strict';

// function doubleEvenNumbers(numbers) {
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       newNumbers.push(numbers[i] * 2);
//     }
//   }
//   return newNumbers;
// }

const myNumbers = [1, 2, 3, 4];
// console.log(doubleEvenNumbers(myNumbers))

function doubleEvenNumbers(arr) {
  const evenNumber = arr.filter(num => {
    return num % 2 == 0;
  });
  const doubleNumber = evenNumber.map(num => {
    return num * 2;
  });
  return doubleNumber;
}

console.log(doubleEvenNumbers(myNumbers));
