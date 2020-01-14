'use strict';

/* ok i need someone to explain why the code won't work if i specify the variable value from the beginning 
 like follows e.g. const numOfPeople = document.querySelector('#input-people').value
 if i do the above, i get the alert message saying there are no numbers, even if there are. 


 wasted 3hrs debugging. 
 */

const button = document.querySelector('#calculate');
const billAmount = document.querySelector('#input-bill');
const serviceQuality = document.querySelector('#service-quality').value;
const numOfPeople = document.querySelector('#input-people');
const finalAmount = document.querySelector('.final-amount');
const eachWord = document.querySelector('.each');
let answer;

// Point-1: this function will fire up upon clicking on the calculate button
button.addEventListener('click', calculateTip);

// point-2: checking if the fields have values. it goes together with point 3 & 4.
function checkValues(item1, item2, alertMessage) {
  if (item1 == '' || item2 == '') {
    alert(alertMessage);
    return false;
  }
}

// point-3: checking if the number of people is 1 to add the word each.
function checkNumOfPeople() {
  if (numOfPeople.value == 1) {
    eachWord.classList.toggle('hidden');
  }
}

// point-4: Do the calculations checking the values and the num of people.
function calcuatePercentage(percentage) {
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

// point-5: calcualte the tips percentage.
function calculateTip() {
  if (serviceQuality === '30%-Outstanding') {
    calcuatePercentage(0.3);
  } else if (serviceQuality === '20%-Good') {
    calcuatePercentage(0.2);
  } else if (serviceQuality === '15%-It was ok') {
    calcuatePercentage(0.15);
  } else if (serviceQuality === '10%-Bad') {
    calcuatePercentage(0.1);
  } else if (serviceQuality === '5%-Terrible') {
    calcuatePercentage(0.05);
  }
}
