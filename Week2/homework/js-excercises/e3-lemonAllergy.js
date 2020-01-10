'use strict';

const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

const itemRemoved = 'Lemon';

// method 1
const filterd1 = fruitBasket.filter(item => item !== itemRemoved);
console.log(`My mom bought me a fruit basket, containing ${filterd1}`);

// method 2
function filterItem(item) {
  return item !== itemRemoved;
}
const filterd2 = fruitBasket.filter(filterItem);
console.log(`My mom bought me a fruit basket, containing ${filterd2}`);
