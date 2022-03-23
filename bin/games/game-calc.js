import game from '../../src/index.js';
import getRandomInRange from '../../src/random.js';

const rulesOfTheGame = 'What is the result of the expression?';

const logic = (num1, num2, operator) => {
  switch (operator) {
    case '*':
      return num1 * num2;

    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;
    default:
      return null;
  }
};

const questionAnswer = () => {
  const arrOperator = ['+', '-', '*'];
  const randomNumOne = getRandomInRange(1, 100);
  const randomNumTwo = getRandomInRange(1, 100);
  const randomOperator = arrOperator[getRandomInRange(0, 2)];
  const question = `${randomNumOne} ${randomOperator} ${randomNumTwo}`;
  const correctAnswer = String(logic(randomNumOne, randomNumTwo, randomOperator));
  return [question, correctAnswer];
};

const gameCalc = () => game(rulesOfTheGame, questionAnswer);
export default gameCalc;
