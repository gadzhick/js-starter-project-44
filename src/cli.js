import readlineSync from 'readline-sync';

export default function askQuestion(question) {
  return readlineSync.question(question);
}
