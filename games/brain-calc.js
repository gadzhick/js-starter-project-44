import askQuestion from "../src/cli.js";
import {processQuestion, QUESTIONS_COUNT} from "../src/index.js";

export default function brainCalc() {
  console.info('Welcome to the Brain Games!');
  const name = askQuestion('May I have your name? ');
  console.info(`Hello, ${name}!`);

  try {
    console.info('What is the result of the expression?');
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

function generateQuestion() {
  const operators = ['+', '-', '*'];

  const operatorPosition = Math.floor(Math.random() * 3);
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  let correctAnswer;

  switch (operatorPosition) {
    case 0:
      correctAnswer = (firstNumber + secondNumber).toString();
      break;
    case 1:
      correctAnswer = (firstNumber - secondNumber).toString();
      break;
    case 2:
      correctAnswer = (firstNumber * secondNumber).toString();
      break;
    default:
      throw new Error('Internal server error.');
  }

  const question = `${firstNumber} ${operators[operatorPosition]} ${secondNumber}`;

  return {
    question: question,
    correctAnswer: correctAnswer,
  }
}