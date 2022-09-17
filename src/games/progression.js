import runGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const progressionGameRules = 'What number is missing in the progression?';

const getProgression = (start, long, step) => {
  const range = [];
  for (let i = start; i < long; i += step) {
    range.push(i);
  }

  return range;
};

const progressionGameRound = () => {
  const rangeStart = generateRandomNumber(0, 50);
  const rangeStepsAmmount = generateRandomNumber(5, 10);
  const rangeStepInterval = generateRandomNumber(1, 10);
  const rangeStop = rangeStart + (rangeStepInterval * (rangeStepsAmmount));
  const missingNumber = generateRandomNumber(0, rangeStepsAmmount - 1);
  const progression = getProgression(rangeStart, rangeStop, rangeStepInterval);
  const getMissingNumber = progression[missingNumber];
  progression[missingNumber] = '..';

  return [`${progression.join(' ')}`, `${getMissingNumber}`];
};

export default () => runGame(progressionGameRules, progressionGameRound);
