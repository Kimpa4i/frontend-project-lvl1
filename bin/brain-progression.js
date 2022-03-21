#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomInRange from '../src/random.js';

// Приветствие
const rulesOfTheGame = 'What number is missing in the progression?';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hi ${userName}`);
// Показать правило игры
console.log(rulesOfTheGame);

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

let count = 0;
for (let i = 0; i < 3; i += 1) {
  const [question, correctAnswer] = questionAnswer();
  // Показать вопрос
  console.log(`Question:${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (correctAnswer === answer) {
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
