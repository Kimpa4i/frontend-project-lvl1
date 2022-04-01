import game from '../index.js';
import getRandomRange from '../random.js';

// Приветствие
const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const calculateAnswer = (number) => {
  if (number < 2) {
    return true;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const num = getRandomRange(1, 100);
  const correctAnswer = calculateAnswer(num) ? 'yes' : 'no';
  const question = num;
  return [question, correctAnswer];
};

const gamePrime = () => game(ruleGame, getGameData);
export default gamePrime;
