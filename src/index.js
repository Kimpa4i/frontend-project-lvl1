import readlineSync from 'readline-sync';

const rulesOfTheGame;

const game = (rulesOfTheGame, questionAnswer) => {
// Приветствие
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hi ${userName}`);
// Правило игры
  console.log(rulesOfTheGame);

  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const [randomNum, answer] = questionAnswer();

  // Показать вопрос
    const questionText = `Question:${randomNum}`;
    const question = readlineSync.question(questionText);

  // Получить ответ
    console.log(`Your answer:${question}`);
  // Проверка
    if (answer === question) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`${question} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (count === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
