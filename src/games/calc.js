import gameFlow, { numberRounds } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';
const mathOperators = '*+-';

const calculate = (num1, num2, operators) => {
  switch (operators) {
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    default:
      throw new Error('Unknown sign!');
  }
};

const generateRound = () => {
  const num1 = getRandomNumber(0, 50);
  const num2 = getRandomNumber(0, 50);

  const operators = mathOperators[getRandomNumber(0, mathOperators.length - 1)];
  const answer = calculate(num1, num2, operators).toString();
  const question = `${num1} ${operators} ${num2}`;
  return [answer, question];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < numberRounds; i += 1) {
    rounds.push(generateRound());
  }
  gameFlow(description, rounds);
};
