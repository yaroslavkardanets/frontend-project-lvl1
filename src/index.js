import readlineSync from 'readline-sync';
import generateRandomNumber from './generate-random-number.js';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${userName}!`);

export const gameRules = (rules) => {
  console.log(rules);
};

// const randomNumber = generateRandomNumber();

const gameRound = (random) => {
  console.log(`Question: ${random}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const isEven = random % 2 === 0;

  if ((isEven && userAnswer === 'yes') || (!isEven && userAnswer === 'no')) {
    console.log('Correct!');
    return true;
  }
  console.log('Wrong answer!');
  return false;
};

export const fullGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const game = gameRound(generateRandomNumber());
    if (!game) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
// export default gameRules;
