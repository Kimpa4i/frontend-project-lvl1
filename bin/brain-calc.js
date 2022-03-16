#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomInRange from '../src/random.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hi ${userName}`);
const questionOfGame = 'What is the result of the expression?';
console.log(questionOfGame);

const arr = ['+', '-', '*'];
let count = 0;

for (let i = 0; i < 3; i += 1) {
  const randomNumOne = getRandomInRange(1, 100);
  const randomNumTwo = getRandomInRange(1, 100);
  const randomOperator = arr[getRandomInRange(0, 2)];
  const questionText = `Question:${randomNumOne} ${randomOperator} ${randomNumTwo}`;
  const question = readlineSync.question(questionText);
  console.log(`Your answer:${question}`);

  // eslint-disable-next-line consistent-return
  const gameLogic = () => {
    switch (randomOperator) {
      case '*':
        return randomNumOne * randomNumTwo;

      case '+':
        return randomNumOne + randomNumTwo;

      case '-':
        return randomNumOne - randomNumTwo;
      default:
    }
  };

  if (gameLogic(randomOperator) === Number(question)) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`${question} is wrong answer ;(. Correct answer was ${gameLogic(randomOperator)}.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
