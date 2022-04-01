import game from '../index.js';
import getRandomRange from '../random.js';
import getProgression from '../progression.js';
// Приветствие
const ruleGame = 'What number is missing in the progression?';

const calculateAnswer = (value, step, length, numOfHiddenNumber) => {
  const str = getProgression(value, step, length);
  const hiddenNumber = str[numOfHiddenNumber];
  str[numOfHiddenNumber] = '..';
  const arr = str.join(' ');
  return [arr, hiddenNumber];
};

const getGameData = () => {
  const value = getRandomRange(1, 100);
  const step = getRandomRange(1, 10);
  const length = 10;
  const numOfHiddenNumber = getRandomRange(0, 9);
  const [question, correctAnswer] = calculateAnswer(value, step, length, numOfHiddenNumber);
  return [question, String(correctAnswer)];
};

const gameProgression = () => game(ruleGame, getGameData);
export default gameProgression;
