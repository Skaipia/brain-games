import gameFlow, { numberRounds } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (begin, step, hiddenIndex, counter) => {
  const progression = [];
  for (let i = 0; i < counter; i += 1) {
    progression.push(begin + step * i);
  }
  return progression;
};

const generateRound = () => {
  const begin = getRandomNumber(2, 10);
  const step = getRandomNumber(2, 10);
  const progressionLength = getRandomNumber(5, 10);
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);
  const progression = getProgression(begin, step, hiddenIndex, progressionLength);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  const answer = String(begin + step * hiddenIndex);
  return [answer, question];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < numberRounds; i += 1) {
    rounds.push(generateRound());
  }
  gameFlow(description, rounds);
};
