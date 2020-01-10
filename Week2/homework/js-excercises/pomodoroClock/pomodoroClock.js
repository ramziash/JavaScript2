'use strict';
// Point 1: create our timer & buttons variables.
const timer = document.querySelector('#timer');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const stop = document.querySelector('#stop');

// Point 2: create event listeners for those buttons.
start.addEventListener('click', () => {
  toggleClock();
});

pause.addEventListener('click', () => {
  toggleClock();
});

// we have an argument here to know which from the 3 to apply
stop.addEventListener('click', () => {
  toggleClock(true);
});

// Point 3: Creating varialbes to track the timer.
let isClockRunning = false;
let sessionDuration = 1500;
let currentTimeLeftInSession = 1500;
let clockTimer;
let isClockStopped = true;

// Point 4: creating a variable function that fires upon clicking.
const toggleClock = reset => {
  if (reset) {
    //if stop is pressed, an argument reset is passed to stop the timer.
    stopClock();
  } else {
    if (isClockStopped) {
      setUpdatedTimers();
      isClockStopped = false;
    }

    if (isClockRunning === true) {
      // pauses the timer
      clearInterval(clockTimer);

      isClockRunning = false;
    } else {
      // keeps on running
      clockTimer = setInterval(() => {
        currentTimeLeftInSession--;
        // show the time left
        displayCurrentTimeLeftInSession();
        if (currentTimeLeftInSession === 0) {
          stopClock();
          timer.innerHTML = 'Time is up';
        }
      }, 1000);
      isClockRunning = true;
    }
  }
};

// Point 5: show the time

const displayCurrentTimeLeftInSession = () => {
  const secondsLeft = currentTimeLeftInSession;
  let result = '';
  //to get the seconds to show, we get the reminder of 60.
  const seconds = secondsLeft % 60;
  // to get the minutes, we divide the seconds and then use the reminder to show them in their position
  const minutes = parseInt(secondsLeft / 60) % 60;
  let hours = parseInt(secondsLeft / 3600);
  // here we use the this function to show the timer with 0 if it is less than 10.
  function addLeadingZeroes(time) {
    return time < 10 ? `0${time}` : time;
  }
  // combining everything together. hours, minuts and seconds.
  if (hours > 0) result += `${hours}:`;
  result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`;
  //adding our result to the page.
  timer.innerText = result.toString();
};

// Point 6: creating the stop timer variable function

const stopClock = () => {
  // when it stops, check for any updates in the duration
  setUpdatedTimers();
  // reset the timer
  clearInterval(clockTimer);
  // change the value to true.
  isClockStopped = true;
  // update our variable to know that the timer is stopped
  isClockRunning = false;
  // reset the time left in the session to its original state
  currentTimeLeftInSession = sessionDuration;
  // update the timer displayed
  displayCurrentTimeLeftInSession();
};

// Point 7: Updating the interval, only after the session has stoped.

let updatedSessionDuration;
let durationInput = document.querySelector('#input-duration');
durationInput.value = '25';

// UPDATE TIME
durationInput.addEventListener('input', () => {
  updatedSessionDuration = minuteToSeconds(durationInput.value);
});

// func to change min to sec
const minuteToSeconds = mins => {
  return mins * 60;
};

// updating the session if there is input. if not, set to default.
const setUpdatedTimers = () => {
  currentTimeLeftInSession = updatedSessionDuration ? updatedSessionDuration : sessionDuration;
  sessionDuration = currentTimeLeftInSession;
};

// Point 8: the message.
