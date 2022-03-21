#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomInRange from '../src/random.js';

// Приветствие
const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hi ${userName}`);
// Показать правило игры
console.log(rulesOfTheGame);

const logic = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const questionAnswer = () => {
  const randomNum = getRandomInRange(1, 100);
  const correctAnswer = logic(randomNum);
  const question = randomNum;
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

// Во всех играх есть общая логика:
// Приветствие игрока
// Показать правило игры
// Показать вопрос
// Получить ответ
// Сравнить ответ с правильным, выдать результат
// Если ответ был правильный, задать следующий вопрос
