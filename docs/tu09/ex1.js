import sumInput from './ex1.bl.js';

const numbers = getNumbers();
const sum = sumInput(numbers);
showResult(sum);

function getNumbers() {
  let numbers = [];

  while (true) {
    let value = prompt('A number please?', 0);

    // should we cancel?
    if (value === '' || value === null) break;

    numbers.push(+value);
  }

  return numbers;
}

function showResult(sum) {
  console.log(`Sum of numbers = ${sum}`);
}
