import readlineSync from 'readline-sync';

import userName from './userName.js';

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

export default fullGame;
