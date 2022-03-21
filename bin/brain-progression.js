#!/usr/bin/env node
import game from '../src/index.js';
import getRandomInRange from '../src/random.js';

// Приветствие
const rulesOfTheGame = 'What number is missing in the progression?';

const logic = (x, y, z) => {
  const str = [];
  for (let i = 0; i < 10; i += 1) {
    const prog = x + y;
    str.push(prog);
    // eslint-disable-next-line no-param-reassign
    x += y;
  }
  const hiddenNumber = str[z];
  str[z] = '..';
  const arr = str.join(' ');
  return [arr, hiddenNumber];
};

const questionAnswer = () => {
  const value = getRandomInRange(1, 100);
  const step = getRandomInRange(1, 10);
  const numOfArr = getRandomInRange(1, 10);
  const [question, correctAnswer] = logic(value, step, numOfArr);
  return [question, String(correctAnswer)];
};

game(rulesOfTheGame, questionAnswer);
