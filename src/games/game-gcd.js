import game from '../index.js';
import getRandomInRange from '../random.js';

const ruleGame = 'Find the greatest common divisor of given numbers.';

const calculateAnswer = (x, y) => {
  if (y > x) {
    return calculateAnswer(y, x);
  }
  if (!y) {
    return x;
  }
  return calculateAnswer(y, x % y);
};

const getGameData = () => {
  const num1 = getRandomInRange(1, 100);
  const num2 = getRandomInRange(1, 100);
  const correctAnswer = String(calculateAnswer(num1, num2));
  const question = `${num1} ${num2}`;
  return [question, correctAnswer];
};

const gameGcd = () => game(ruleGame, getGameData);
export default gameGcd;
