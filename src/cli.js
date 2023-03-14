import readlineSync from 'readline-sync';

export default function askName() {
  const userName = readlineSync.question('May I have your name? ');
  const result = `Hello, ${userName}!`;
  console.log(result);
}
