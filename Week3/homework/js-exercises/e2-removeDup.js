'use strict';

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

function removeDup(arr) {
  return arr.filter((letter, index) => arr.indexOf(letter) === index);
}

console.log(removeDup(letters));

// alternative method

function removeDuplicate(arr) {
  let newArray = [];
  arr.forEach(function(item) {
    if (!newArray[item]) {
      newArray[item] = true;
    }
  });
  return Object.keys(newArray);
}

console.log(removeDuplicate(letters));

