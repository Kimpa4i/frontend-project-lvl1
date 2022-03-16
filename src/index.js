import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hi ${userName}`);
const questionOfGame = '';
console.log(questionOfGame);

const arr = [];
let count = 0;

for (let i = 0; i < 3; i += 1) {
  const questionText = '';
  const question = readlineSync.question(questionText);
  console.log(`Your answer:${question}`);

  const gameLogic = () => {
  };

  if (gameLogic() === question) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`${question} is wrong answer ;(. Correct answer was ${gameLogic()}.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
