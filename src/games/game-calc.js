import game from '../index.js';
import getRandomInRange from '../random.js';

const ruleGame = 'What is the result of the expression?';

const calculateAnswer = (num1, num2, operator) => {
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
  const operators = ['+', '-', '*'];
  const num1 = getRandomInRange(1, 100);
  const num2 = getRandomInRange(1, 100);
  const operator = operators[getRandomInRange(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculateAnswer(num1, num2, operator));
  return [question, correctAnswer];
};

const gameCalc = () => game(ruleGame, getGameData);
export default gameCalc;
