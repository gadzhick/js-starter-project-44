#!/usr/bin/env node
import askQuestion from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askQuestion('May I have your name? ');
console.log(`Hello, ${name}!`);

const QUESTIONS_COUNT = 3;

function processQuestion() {
  const number = Math.floor(Math.random() * (100) + 1);
  const isEven = number % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';

  console.log(`Question: ${number}`);
  const answer = askQuestion('Your answer: ');

  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    throw new Error(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
}

try {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < QUESTIONS_COUNT; i += 1) {
    processQuestion();
  }
  console.log(`Congratulations, ${name}!`);
} catch (err) {
  console.log(err.message);
  console.log(`Let's try again, ${name}!`);
}
