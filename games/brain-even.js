import askQuestion from '../src/cli.js';
import { processQuestion, QUESTIONS_COUNT } from '../src/index.js';

export default function brainEven() {
  console.info('Welcome to the Brain Games!');
  const name = askQuestion('May I have your name? ');
  console.info(`Hello, ${name}!`);

  try {
    console.info('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < QUESTIONS_COUNT; i += 1) {
      const number = Math.floor(Math.random() * (100) + 1);
      const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
      processQuestion(number, correctAnswer);
    }
    console.info(`Congratulations, ${name}!`);
  } catch (err) {
    console.error(err.message);
    console.error(`Let's try again, ${name}!`);
  }
}
