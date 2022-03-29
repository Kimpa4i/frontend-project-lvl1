import game from '../../src/index.js';
import getRandomInRange from '../../src/random.js';

// Приветствие
const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const logic = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const questionAnswer = () => {
  const randomNum = getRandomInRange(1, 100);
  const correctAnswer = logic(randomNum);
  const question = randomNum;
  return [question, correctAnswer];
};

const gamePrime = () => game(ruleGame, questionAnswer);
export default gamePrime;
