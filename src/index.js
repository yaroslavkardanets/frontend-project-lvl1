import readlineSync from 'readline-sync';
import generateRandomNumber from './generate-random-number.js';

console.log('Welcome to the Brain Games!');

// export const greeting = () => {
//   const userName = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${userName}!`);
//   return userName;
// };

// const userName = greeting();

export const userName = readlineSync.question('May I have your name? ');

// export const hello = () => {
console.log(`Hello, ${userName}!`);
// };

export const gameRules = (rules) => {
  console.log(rules);
};

const gameRound = () => {
  const randomNumber = generateRandomNumber();
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const isEven = randomNumber % 2 === 0;

  if ((isEven && userAnswer === 'yes') || (!isEven && userAnswer === 'no')) {
    console.log('Correct!');
    return true;
  }
  console.log('Wrong answer!');
  return false;
};

export const fullGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const game = gameRound();
    if (!game) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
// export default gameRules;
