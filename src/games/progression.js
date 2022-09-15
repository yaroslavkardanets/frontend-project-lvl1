import runGame from '../index.js';
import generateRandomRange from '../generate-random-range.js';

const progressionGameRules = 'What number is missing in the progression?';

const progressionGameRound = () => {
  const questionCondition = [];
  const range = [];
  const rangeStart = generateRandomRange(0, 50);
  const rangeStepsAmmount = generateRandomRange(5, 10);
  const rangeStepInterval = generateRandomRange(1, 10);
  const rangeStop = rangeStart + (rangeStepInterval * rangeStepsAmmount);
  const missingNumber = generateRandomRange(0, rangeStepsAmmount);

  for (let i = rangeStart; i <= rangeStop; i += rangeStepInterval) {
    range.push(i);
  }

  const getMissingNumber = range[missingNumber];

  range[missingNumber] = '..';
  const question = `Question: ${range.join(' ')}`;
  questionCondition.push(question, `${getMissingNumber}`);
  return questionCondition;
};

export default () => runGame(progressionGameRules, progressionGameRound);
