import readlineSync from 'readline-sync';

// export const gameRules = (rules) => {
//   console.log(rules);
// };

const runGame = (gameRules, round) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (let i = 0; i < 3; i += 1) {
    const [question, getAnswer] = round();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === getAnswer) {
      console.log('Correct!');
    } else if (userAnswer !== getAnswer) {
      console.log(`Wrong answer!\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
