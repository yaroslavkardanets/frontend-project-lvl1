const generateRandomNumber = () => Math.round(Math.random() * 100);

const greatestDivisor = () => {
  const randomNumber1 = generateRandomNumber();
  console.log(`число 1 = ${randomNumber1}`);
  const randomNumber2 = generateRandomNumber();
  console.log(`число 2 = ${randomNumber2}`);
  if (randomNumber1 === randomNumber2) {
    return randomNumber1;
  }
  const biggestNumber = Math.max(randomNumber1, randomNumber2);
  const smallestNumber = Math.min(randomNumber1, randomNumber2);

  for (let i = smallestNumber; i > 0; i -= 1) {
    if (smallestNumber % i === 0) {
      if (Number.isInteger(biggestNumber / i)) {
        console.log('i = ', i);
        return i;
      }
    }
  }
};
console.log('Answer:');
greatestDivisor();
