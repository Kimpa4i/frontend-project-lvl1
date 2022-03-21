#!/usr/bin/env node
import game from '../src/index.js';
import getRandomInRange from '../src/random.js';

const rulesOfTheGame = 'What is the result of the expression?';

// eslint-disable-next-line consistent-return
function logic(num1, num2, operator) {
  switch (operator) {
    case '*':
      return num1 * num2;

    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;
    default:
  }
}

const questionAnswer = () => {
  const arrOperator = ['+', '-', '*'];
  const randomNumOne = getRandomInRange(1, 100);
  const randomNumTwo = getRandomInRange(1, 100);
  const randomOperator = arrOperator[getRandomInRange(0, 2)];
  const question = `${randomNumOne} ${randomOperator} ${randomNumTwo}`;
  const correctAnswer = String(logic(randomNumOne, randomNumTwo, randomOperator));
  return [question, correctAnswer];
};

game(rulesOfTheGame, questionAnswer);
