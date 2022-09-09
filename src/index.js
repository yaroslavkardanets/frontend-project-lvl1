import readlineSync from 'readline-sync';
import generateRandomNumber from './generate-random-number.js';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${userName}!`);

export const gameRules = (rules) => {
  console.log(rules);
};

const isEven = (randomNum) => randomNum % 2 === 0;

export const gameRound = () => {
  const questionAnswer = [];

  const randomNumber = generateRandomNumber();
  const question = `Question: ${randomNumber}`;

  // const userAnswer = readlineSync.question('Your answer: ');
  const userAnswer = isEven(randomNumber) ? 'yes' : 'no';
  // if ((isEven(randomNumber) === 'yes') || (!isEven(randomNumber) === 'no')) {
  //   console.log('Correct!');
  //   return true;
  // }
  // console.log('Wrong answer!');
  // return false;
  return questionAnswer.push[question, userAnswer];
};

// Надо подумать, как этот модуль будет работать с разными играми
export const fullGame = (round) => {
  const getAnswer = round[1];
  for (let i = 0; i < 3; i += 1) {
    const userAnswer = readlineSync.question('Your answer: ');
    const game = round;
    if (userAnswer === getAnswer) {
      console.log('Correct!');
    } else if (!game) {
      console.log(`Wrong answer!\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
