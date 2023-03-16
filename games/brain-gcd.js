import askQuestion from '../src/cli.js';
import { processQuestion, QUESTIONS_COUNT } from '../src/index.js';

function findGcd(x, y) {
  if (y > x) return findGcd(y, x);
  if (!y) return x;
  return findGcd(y, x % y);
}
function generateQuestion() {
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);

  const question = `${firstNumber} ${secondNumber}`;

  const correctAnswer = findGcd(firstNumber, secondNumber).toString();

  return {
    question: question,
    correctAnswer: correctAnswer,
  };
}

export default function brainGcd() {
  console.info('Welcome to the Brain Games!');
  const name = askQuestion('May I have your name? ');
  console.info(`Hello, ${name}!`);

  try {
    console.info('Find the greatest common divisor of given numbers.');
    for (let i = 0; i < QUESTIONS_COUNT; i += 1) {
      const questionObject = generateQuestion();
      processQuestion(questionObject.question, questionObject.correctAnswer);
    }
    console.info(`Congratulations, ${name}!`);
  } catch (err) {
    console.error(err.message);
    console.error(`Let's try again, ${name}!`);
  }
}
