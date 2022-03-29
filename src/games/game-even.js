import game from '../../src/index.js';
import getRandomInRange from '../../src/random.js';

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const logic = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const questionAnswer = () => {
  const randomNum = getRandomInRange(1, 100);
  const correctAnswer = logic(randomNum);
  const question = randomNum;
  return [question, correctAnswer];
};

const gameEven = () => game(ruleGame, questionAnswer);
export default gameEven;
