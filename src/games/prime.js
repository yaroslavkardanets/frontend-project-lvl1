// import readlineSync from 'readline-sync';

// import { userName } from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

export const primeGameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const primeGameRound = () => {
  const questionCondition = [];
  const randomNumber = generateRandomNumber();

  const isPrime = () => {
    if (randomNumber === 0 || randomNumber === 1 || randomNumber === 2) {
      return 'yes';
    } if (randomNumber % 2 === 0) {
      return 'no';
    } if (randomNumber % 2 !== 0) {
      const arr = [];
      for (let i = 3; i < randomNumber / 2; i += 2) {
        if (Number.isInteger(randomNumber / i)) {
          arr.push(i);
        }
      }
      if (arr.length > 0) {
        return 'no';
      }
      return 'yes';
    }
  };
  // console.log('*** isPrime: ', isPrime());

  const question = `Question: ${randomNumber}`;
  questionCondition.push(question, isPrime());
  return questionCondition;
  // const userAnswer = readlineSync.question('Your answer: ');

  // if ((isPrime() && userAnswer === 'yes') || (!isPrime() && userAnswer === 'no')) {
  //   console.log('Correct!');
  //   return true;
  // }
  // console.log('Wrong answer!');
  // return false;
};

// Надо подумать, как этот модуль будет работать с разными играми
// export const fullGame = () => {
//   for (let i = 0; i < 3; i += 1) {
//     const game = gameRound();
//     if (!game) {
//       console.log(`Let's try again, ${userName}!`);
//       return;
//     }
//   }
//   console.log(`Congratulations, ${userName}!`);
// };

// export default fullGame;
