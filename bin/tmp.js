const generateRandomNumber = () => Math.round(Math.random() * 100);

// eslint-disable-next-line consistent-return
const greatestDivisor = () => {
  let result = 0;
  const randomNumber1 = generateRandomNumber();
  console.log(`число 1 = ${randomNumber1}`);
  const randomNumber2 = generateRandomNumber();
  console.log(`число 2 = ${randomNumber2}`);
  if (randomNumber1 === randomNumber2) {
    result = randomNumber1;
  }
  const biggestNumber = Math.max(randomNumber1, randomNumber2);
  // console.log(`biggestNumber = ${biggestNumber}`);
  const smallestNumber = Math.min(randomNumber1, randomNumber2);
  // console.log(`smallestNumber = ${smallestNumber}`);

  // const divisions = [];
  for (let i = smallestNumber; i > 0; i -= 1) {
    if (smallestNumber % i === 0) {
      if (Number.isInteger(biggestNumber / i)) {
        console.log('i = ', i);
        return i;
      }
      // if (Number.isInteger(biggestNumber / i)) {
      //   result = i;
      // }
      // divisions.push(i);
    }
  }

  // if (divisions.length === 1) {
  //   result = 1;
  // }
  // console.log(divisions.length);
  // for (let i = divisions.length; i > 0; i -= 1) {
  //   if (Number.isInteger(biggestNumber / i)) {
  //     result = divisions[i];
  //     console.log(`i = ${i}`);
  //     console.log(`result = ${result}`);
  //   }
  //
  // }
  return result;
};
console.log('Answer:');
greatestDivisor();
