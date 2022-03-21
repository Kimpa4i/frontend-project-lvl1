#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomInRange from '../src/random.js';

// Приветствие
const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hi ${userName}`);
// Показать правило игры
console.log(rulesOfTheGame);

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
