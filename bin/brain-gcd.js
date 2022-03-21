#!/usr/bin/env node
import getRandomInRange from '../src/random.js';
import game from '../src/index.js';

// Приветствие
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

game(rulesOfTheGame, questionAnswer);
