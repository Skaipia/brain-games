import gameFlow, { numberRounds } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => (num2 === 0 ? num1 : getGcd(num2, num1 % num2));

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const answer = getGcd(num1, num2).toString();
  const question = `${num1} ${num2}`;
  return [answer, question];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < numberRounds; i += 1) {
    rounds.push(generateRound());
  }
  gameFlow(description, rounds);
};
