import readlineSync from 'readline-sync';

export const numberRounds = 3;

const gameFlow = (description, rounds) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  // eslint-disable-next-line no-restricted-syntax
  for (const [answer, questions] of rounds) {
    console.log(`Question: ${questions}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};

export default gameFlow;
