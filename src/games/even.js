import gameFlow, { numberRounds } from '../index.js';

import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(0, 100);
  const answer = isEven(number) ? 'yes' : 'no';
  const question = String(number);
  return [answer, question];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < numberRounds; i += 1) {
    rounds.push(generateRound());
  }
  gameFlow(description, rounds);
};
