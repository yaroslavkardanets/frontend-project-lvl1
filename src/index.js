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
  questionAnswer.push(question);
  const conditionOfUserAnswer = isEven(randomNumber) ? 'yes' : 'no';
  questionAnswer.push(conditionOfUserAnswer);
  return questionAnswer;
};

export const fullGame = (round) => {
  for (let i = 0; i < 3; i += 1) {
    const [question, getAnswer] = round();
    // console.log('*** getAnswer: ', getAnswer);
    // const question = round[0];
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    // const game = round;
    // console.log('*** game: ', game);
    if (userAnswer === getAnswer) {
      console.log('Correct!');
    } else if (userAnswer !== getAnswer) {
      console.log(`Wrong answer!\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
