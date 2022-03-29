import game from '../../src/index.js';
import getRandomInRange from '../../src/random.js';

// Приветствие
const ruleGame = 'What number is missing in the progression?';

const logic = (value, step, numOfHiddenNumber) => {
  const str = [];
  let randomValueProgression = value;
  for (let i = 0; i < 10; i += 1) {
    const progression = randomValueProgression + step;
    str.push(progression);
    randomValueProgression += step;
  }
  const hiddenNumber = str[numOfHiddenNumber];
  str[numOfHiddenNumber] = '..';
  const arr = str.join(' ');
  return [arr, hiddenNumber];
};

const questionAnswer = () => {
  const value = getRandomInRange(1, 100);
  const step = getRandomInRange(1, 10);
  const numOfHiddenNumber = getRandomInRange(0, 9);
  const [question, correctAnswer] = logic(value, step, numOfHiddenNumber);
  return [question, String(correctAnswer)];
};

const gameProgression = () => game(ruleGame, questionAnswer);
export default gameProgression;
