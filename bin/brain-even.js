#!/usr/bin/env node
import readlineSync from 'readline-sync';

const arr = [15, 6, 7];
let counter = 0;
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hi ${userName}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
// eslint-disable-next-line no-restricted-syntax
for (const coll of arr) {
  const question = readlineSync.question(`Question:${coll}`);
  console.log(`Your answer:${question}`);
  const trueAnswer = () => {
    if (coll % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  if (question === trueAnswer(coll)) {
    console.log('Correct!');
    counter += 1;
  } else {
    console.log(`${question} is wrong answer ;(. Correct answer was ${trueAnswer(coll)}.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
