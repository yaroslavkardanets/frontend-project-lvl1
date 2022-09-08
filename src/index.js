import readlineSync from 'readline-sync';
import generateRandomNumber from './generate-random-number.js';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${userName}!`);

export const gameRules = (rules) => {
  console.log(rules);
};

// перенести в even.js
// **************
const question = () => generateRandomNumber();

const condition = (answer, randomNumber) => {
  const isEven = randomNumber % 2 === 0;
  return (isEven && answer === 'yes') || (!isEven && answer === 'no');
};

// **************

const gameRound = (quest, cond) => {
  console.log(`Question: ${quest}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (cond === userAnswer) {
    // console.log('вывод condition: ', condition(userAnswer, question()));
    console.log('Correct!');
    return true;
  }
  console.log('Wrong answer!');
  return false;
};

export const fullGame = (round) => {
  for (let i = 0; i < 3; i += 1) {
    const game = round;
    if (!game) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
// export default gameRules;
