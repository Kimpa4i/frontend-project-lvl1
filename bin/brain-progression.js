#!/usr/bin/env node
import game from '../src/index.js';
import getRandomInRange from '../src/random.js';

// Приветствие
const rulesOfTheGame = 'What number is missing in the progression?';

const logic = (value, step, numOfHiddenNumber) => {
  const str = [];
  for (let i = 0; i < 10; i += 1) {
    const prog = value + step;
    str.push(prog);
    value += step;
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

game(rulesOfTheGame, questionAnswer);
