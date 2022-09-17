import runGame from '../index.js';
import generateRandomRange from '../generate-random-range.js';

const progressionGameRules = 'What number is missing in the progression?';

const getProgression = (start, long, step) => {
  const range = [];
  for (let i = start; i < long; i += step) {
    range.push(i);
  }

  return range;
};

const progressionGameRound = () => {
  const rangeStart = generateRandomRange(0, 50);
  const rangeStepsAmmount = generateRandomRange(5, 10);
  const rangeStepInterval = generateRandomRange(1, 10);
  const rangeStop = rangeStart + (rangeStepInterval * (rangeStepsAmmount));
  const missingNumber = generateRandomRange(0, rangeStepsAmmount - 1);
  const progression = getProgression(rangeStart, rangeStop, rangeStepInterval);
  const getMissingNumber = progression[missingNumber];
  progression[missingNumber] = '..';

  return [`${progression.join(' ')}`, `${getMissingNumber}`];
};

export default () => runGame(progressionGameRules, progressionGameRound);
