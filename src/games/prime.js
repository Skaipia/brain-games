import gameFlow, { numberRounds } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const sqrtNumber = Math.sqrt(number);
  for (let i = 2; i <= sqrtNumber; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(0, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
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
