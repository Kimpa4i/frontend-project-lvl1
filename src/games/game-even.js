import game from '../index.js';
import getRandomInRange from '../random.js';

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const calculateAnswer = (num) => (num % 2 === 0);

const getGameData = () => {
  const num = getRandomInRange(1, 100);
  const correctAnswer = calculateAnswer(num) ? 'yes' : 'no';
  const question = num;
  return [question, correctAnswer];
};

const gameEven = () => game(ruleGame, getGameData);
export default gameEven;
