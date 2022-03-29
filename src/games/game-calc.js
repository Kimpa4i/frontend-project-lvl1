import game from '../index.js';
import getRandomInRange from '../random.js';

const ruleGame = 'What is the result of the expression?';

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

const getGameData = () => {
  const arrOperator = ['+', '-', '*'];
  const randomNumOne = getRandomInRange(1, 100);
  const randomNumTwo = getRandomInRange(1, 100);
  const randomOperator = arrOperator[getRandomInRange(0, 2)];
  const question = `${randomNumOne} ${randomOperator} ${randomNumTwo}`;
  const correctAnswer = String(logic(randomNumOne, randomNumTwo, randomOperator));
  return [question, correctAnswer];
};

const gameCalc = () => game(ruleGame, getGameData);
export default gameCalc;
