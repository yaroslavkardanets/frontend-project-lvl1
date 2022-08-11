#!/usr/bin/env node;
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const gameRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

gameRules();

const gameRound = () => {
  const generateRandomNumber = Math.round(Math.random() * 100);
  console.log(`Question: ${generateRandomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const isEven = generateRandomNumber % 2 === 0;

  if ((isEven && userAnswer === 'yes') || (!isEven && userAnswer === 'no')) {
    console.log('Correct!');
    return true;
  }
  console.log('Wrong answer!');
  return false;
};

const fullGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const game = gameRound();
    if (!game) {
      console.log(`Game over, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

fullGame();
