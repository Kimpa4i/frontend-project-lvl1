import game from '../../src/index.js';
import getRandomInRange from '../../src/random.js';

const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';

const logic = (x, y) => {
  if (y > x) {
    return logic(y, x);
  }
  if (!y) {
    return x;
  }
  return logic(y, x % y);
};

const questionAnswer = () => {
  const randomNumOne = getRandomInRange(1, 100);
  const randomNumTwo = getRandomInRange(1, 100);
  const correctAnswer = String(logic(randomNumOne, randomNumTwo));
  const question = `${randomNumOne} ${randomNumTwo}`;
  return [question, correctAnswer];
};

const gameGcd = () => game(rulesOfTheGame, questionAnswer);
export default gameGcd;
