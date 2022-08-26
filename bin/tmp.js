import readlineSync from 'readline-sync';

import generateRandomNumber from '../src/generate-random-number.js';

const randomNumber = generateRandomNumber();
const isPrime = () => {
  if (randomNumber === 0 || randomNumber === 1 || randomNumber === 2) {
    return true;
  }
  console.log(randomNumber);
  const arr = [];
  if (randomNumber % 2 !== 0) {
    for (let i = 3; i < randomNumber / 2; i += 2) {
      if (Number.isInteger(randomNumber / i)) {
        arr.push(i);
        console.log(arr);
      }
    }
  }
};
isPrime();
