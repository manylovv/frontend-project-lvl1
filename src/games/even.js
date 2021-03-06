import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const isEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const getBrainEven = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

const startBrainEvenGame = () => console.log(runEngine(getBrainEven, description));
export default startBrainEvenGame;
