import game from '../index.js';
import getRandomInRange from '../random.js';

// Приветствие
const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const calculateAnswer = (number) => {
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

const getGameData = () => {
  const num = getRandomInRange(1, 100);
  const correctAnswer = calculateAnswer(num);
  const question = num;
  return [question, correctAnswer];
};

const gamePrime = () => game(ruleGame, getGameData);
export default gamePrime;
