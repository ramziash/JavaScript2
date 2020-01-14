'use strict';

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

function dup(arr) {
  return arr.filter((index, letter) => arr.indexOf(index) === letter);
}

console.log(dup(letters));

// alternative method

function remDup(arr) {
  let newArray = [];
  arr.forEach(function(item) {
    if (!newArray[item]) {
      newArray[item] = true;
    }
  });
  return Object.keys(newArray);
}

console.log(remDup(letters));
