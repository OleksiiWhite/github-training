// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

////////////////////////////////////////////

// // Change code below this line
// function add(...args) {
//   let totalArgs = 0;
//   for (const arg of args) {
//     totalArgs += arg;
//   }
//   console.log(totalArgs);
//   return totalArgs;
//   // Change code above this line
// }

// add(12, 4, 11, 48);

/////////////////////////////////////////////////

function findMatches(massFirst, ...args) {
  const matches = [];

  console.log(massFirst);
  console.log(args);
  for (const arg of args) {
    const inclArg = massFirst.includes(arg);
    if (inclArg) {
      matches.push(arg);
    }
  }
  console.log(matches);
  return matches;
}
findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
