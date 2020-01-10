'use strict';

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

let ulElement = document.createElement('ul');

myHobbies.forEach(function(item) {
  let liElement = document.createElement('li');
  let text = document.createTextNode(item);
  liElement.appendChild(text);
  ulElement.appendChild(liElement);
  document.body.appendChild(ulElement);
});
