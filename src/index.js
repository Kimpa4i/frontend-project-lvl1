#!/usr/bin/env node
import readlineSync from 'readline-sync';

const game = (rulesOfTheGame, questionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hi ${userName}`);
  console.log(rulesOfTheGame);
  let count = 0;
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
};
export default game;
