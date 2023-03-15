import askQuestion from './cli.js';

export const QUESTIONS_COUNT = 3;

export function processQuestion(question, correctAnswer) {
  console.info(`Question: ${question}`);
  const answer = askQuestion('Your answer: ');

  if (answer === correctAnswer) {
    console.info('Correct!');
  } else {
    throw new Error(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
}
