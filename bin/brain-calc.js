#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomInRange from '../src/random.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hi ${userName}`);
const rulesOfTheGame = 'What is the result of the expression?';
console.log(rulesOfTheGame);

const arr = ['+', '-', '*'];
let count = 0;

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
  const randomNumOne = getRandomInRange(1, 100);
  const randomNumTwo = getRandomInRange(1, 100);
  const randomOperator = arr[getRandomInRange(0, 2)];
  const question = `${randomNumOne} ${randomOperator} ${randomNumTwo}`;
  const correctAnswer = String(logic(randomNumOne, randomNumTwo, randomOperator));
  return [question, correctAnswer];
};

for (let i = 0; i < 3; i += 1) {
  const [question, correctAnswer] = questionAnswer();
  console.log(`Question:${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (correctAnswer === (answer)) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
