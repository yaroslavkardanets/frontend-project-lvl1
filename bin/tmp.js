import generateRandomNumber from '../src/generate-random-number.js';

const randomNumber = generateRandomNumber();

const isPrime = () => {
  console.log(randomNumber);
  if (randomNumber === 0 || randomNumber === 1 || randomNumber === 2) {
    return true;
  } if (randomNumber % 2 === 0) {
    return false;
  } if (randomNumber % 2 !== 0) {
    const arr = [];
    for (let i = 3; i < randomNumber / 2; i += 2) {
      if (Number.isInteger(randomNumber / i)) {
        arr.push(i);
        console.log(arr);
      }
    }
    if (arr.length > 0) {
      return false;
    }
    return true;
  }
};
console.log(isPrime());
isPrime();
