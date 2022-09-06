import readlineSync from 'readline-sync';

export const greeting = (text) => {
  console.log(text);
};

export const userName = readlineSync.question('May I have your name? ');

export const hello = () => {
  console.log(`Hello, ${userName}!`);
};

export const gameRules = (rules) => {
  console.log(rules);
};

// export default gameRules;
