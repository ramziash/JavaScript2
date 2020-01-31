'use strict';

const button = document.querySelector('#calculate');
const billAmount = document.querySelector('#input-bill');
const serviceQuality = document.querySelector('#service-quality').value;
const numOfPeople = document.querySelector('#input-people');
const finalAmount = document.querySelector('.final-amount');
const eachWord = document.querySelector('.each');
let answer;

// point-1: checking if the fields have values. it goes together with point 2 & 3.
function checkValues(item1, item2, alertMessage) {
  if (item1 === '' || item2 === '') {
    alert(alertMessage);
    return false;
  }
}

// point-2: checking if the number of people is 1 to add the word each.
function checkNumOfPeople() {
  if (numOfPeople.value == 1) {
    eachWord.classList.toggle('hidden');
  }
}

// point-3: Do the calculations checking the values and the num of people.
function calculatePercentage(percentage) {
  let correctValues = checkValues(
    Number(billAmount.value),
    Number(numOfPeople.value),
    'input numbers',
  );
  if (correctValues != false) {
    answer = (Number(billAmount.value) * percentage) / Number(numOfPeople.value);
    finalAmount.innerHTML = parseFloat(answer).toFixed(2);
    checkNumOfPeople();
  }
}

// point-4: calcualte the tips percentage.
function calculateTip() {
  if (serviceQuality === '30%-Outstanding') {
    calculatePercentage(0.3);
  } else if (serviceQuality === '20%-Good') {
    calculatePercentage(0.2);
  } else if (serviceQuality === '15%-It was ok') {
    calculatePercentage(0.15);
  } else if (serviceQuality === '10%-Bad') {
    calculatePercentage(0.1);
  } else if (serviceQuality === '5%-Terrible') {
    calculatePercentage(0.05);
  }
}

// Point-5: this function will fire up upon clicking on the calculate button
button.addEventListener('click', calculateTip);
