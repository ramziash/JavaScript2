'use strict';

const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

function hourlyRateMonday(arr) {
  const duration = arr.map(item => {
    return item.duration;
  });

  //getting the time spent in hrs
  const durationInHours = duration.map(item => {
    return item / 60;
  });

  //mutliplying by the hourly rate
  const multiplyDurationHourlyRate = durationInHours.map(item => {
    return item * 25;
  });

  const sumDayRate = multiplyDurationHourlyRate.reduce((total, item) => {
    return item + total;
  }, 0);

  const toTwoDecimals=sumDayRate.toFixed(2)
  return toTwoDecimals;
}

console.log(hourlyRateMonday(mondayTasks));
