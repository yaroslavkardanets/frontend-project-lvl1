#!/usr/bin/env node;
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const generateRandomNumber = Math.round(Math.random() * 100);
console.log(`Question: ${generateRandomNumber}`);
const userAnswer = readlineSync.question('Your answer: ');

const checkEvenGame = () => {
  const isEven = generateRandomNumber % 2 === 0;

  if ((isEven && userAnswer === 'yes') || (!isEven && userAnswer === 'no')) {
    console.log('Correct!');
  } else {
    console.log('Wrong answer!');
  }
};

console.log(checkEvenGame());

// if (readlineSync.keyInYN(`Question: ${randomNumber}`)) {
//   // 'Y' key was pressed.
//   console.log('Installing now...');
//   // Do something...
// } else {
//   // Another key was pressed.
//   console.log('Searching another...');
//   // Do something...
// }
