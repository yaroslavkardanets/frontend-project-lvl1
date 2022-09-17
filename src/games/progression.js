import runGame from '../index.js';
import generateRandomRange from '../generate-random-range.js';

const progressionGameRules = 'What number is missing in the progression?';

const getProgression = (start, long, step) => {
  const range = [];
  for (let i = start; i < long; i += step) {
    range.push(i);
  }
  // console.log(range);
  return range;
};

const progressionGameRound = () => {
  // const questionCondition = [];
  // const progression = [];
  const rangeStart = generateRandomRange(0, 50);
  const rangeStepsAmmount = generateRandomRange(5, 10);
  const rangeStepInterval = generateRandomRange(1, 10);
  const rangeStop = rangeStart + (rangeStepInterval * (rangeStepsAmmount));
  const missingNumber = generateRandomRange(0, rangeStepsAmmount - 1);
  // console.log('** rangeStart: ', rangeStart);
  // console.log('*** rangeStepsAmmount: ', rangeStepsAmmount);
  // console.log('*** rangeStepInterval: ', rangeStepInterval);
  // console.log('*** rangeStop: ', rangeStop);
  // console.log('*** missingNumber: ', missingNumber);

  const progression = getProgression(rangeStart, rangeStop, rangeStepInterval);
  // console.log('*** progression: ', progression);

  const getMissingNumber = progression[missingNumber];

  progression[missingNumber] = '..';
  const question = `Question: ${progression.join(' ')}`;
  // questionCondition.push(question, `${getMissingNumber}`);
  return [question, `${getMissingNumber}`];
};

export default () => runGame(progressionGameRules, progressionGameRound);
