// import generateRandomNumber from '../src/generate-random-number.js';
import generateRandomRange from '../src/generate-random-range.js';

const gameRound = () => {
  const range = [];
  const rangeStart = generateRandomRange(0, 50);
  console.log(`rangeStart = ${rangeStart}`);
  const rangeSteps = generateRandomRange(5, 10);
  console.log(`rangeSteps = ${rangeSteps}`);
  const rangeStep = generateRandomRange(1, 10);
  console.log(`rangeStep = ${rangeStep}`);
  const rangeStop = rangeStart + (rangeStep * rangeSteps);
  const missingNumber = generateRandomRange(0, rangeSteps);

  for (let i = rangeStart; i < rangeStop; i += rangeStep) {
    // console.log('i =', i);
    range.push(i);
  }
  console.log(`range = ${range}`);
  range[missingNumber] = '...';
  console.log(`rangeMissing = ${range}`);
  return range;
};

gameRound();
