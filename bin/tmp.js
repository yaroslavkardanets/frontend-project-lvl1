const generateRandomNumber = () => Math.round(Math.random() * 100);

const randomNumber1 = generateRandomNumber();
console.log(`число 1 = ${randomNumber1}`);
const randomNumber2 = generateRandomNumber();
console.log(`число 2 = ${randomNumber2}`);

const greatestDivisor = () => {
  const biggestNumber = Math.max(randomNumber1, randomNumber2);
  const smallestNumber = Math.min(randomNumber1, randomNumber2);
  console.log(`biggestNumber = ${biggestNumber}`);
  console.log(`smallestNumber = ${smallestNumber}`);
  if (smallestNumber === 0 || smallestNumber === 1) {
    return smallestNumber;
  }

  for (let i = smallestNumber; i >= 0; i -= 1) {
    if (smallestNumber % i === 0 /* && Number.isInteger(biggestNumber / i) */) {
      if (Number.isInteger(biggestNumber / i)) {
        console.log('i = ', i);
        return i;
      }
    }
  }
};
console.log('Answer:');
console.log(greatestDivisor());
