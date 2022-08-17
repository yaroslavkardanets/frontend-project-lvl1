import readlineSync from 'readline-sync';

// export const greeting = () => {
console.log('Welcome to the Brain Games!');
// };

export const userName = readlineSync.question('May I have your name? ');

// export const hello = () => {
console.log(`Hello, ${userName}!`);
// };

const evenGameRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export default evenGameRules;
