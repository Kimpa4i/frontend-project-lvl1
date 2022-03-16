#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hi ${userName}`);
const questionOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(questionOfGame);

const arr = [15, 6, 7];
let count = 0;

// eslint-disable-next-line no-restricted-syntax
for (let i = 0; i < 3; i += 1) {
  const questionText = `Question:${arr[i]}`;
  const question = readlineSync.question(questionText);
  console.log(`Your answer:${question}`);

  const gameLogic = () => {
    if (arr[i] % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  if (gameLogic(arr) === question) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`${question} is wrong answer ;(. Correct answer was ${gameLogic(arr)}.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
