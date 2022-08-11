#!/usr/bin/env node;
import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
const gameRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};
greeting();
gameRules();

const gameRound = () => {
  const generateRandomNumber = Math.round(Math.random() * 100);
  console.log(`Question: ${generateRandomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const isEven = generateRandomNumber % 2 === 0;

  if ((isEven && userAnswer === 'yes') || (!isEven && userAnswer === 'no')) {
    console.log('Correct!');
  }
  console.log('Wrong answer!');
};

gameRound();
