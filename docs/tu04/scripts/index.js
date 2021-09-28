'use strict';

let gameCancelled, userTry, invalid;
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

do {
  let numTries = 0;

  // Calculate the secret number
  let secretNum = parseInt(Math.random() * MAX_NUMBER) + MIN_NUMBER;
  do {
    // Obtain a valid input from the user
    do {
      const userInput = prompt(
        `Guess the number between ${MIN_NUMBER} and ${MAX_NUMBER}`
      );
      userTry = +userInput;
      invalid =
        !userTry ||
        userTry === 0 ||
        userTry < MIN_NUMBER ||
        userTry > MAX_NUMBER;
      gameCancelled = userInput == null;
      !gameCancelled && invalid && alert('Invalid number');
    } while (!gameCancelled && invalid);

    // After a valid input, increase the number of tries
    numTries++;

    // Findout if the input number is less or high
    if (!gameCancelled) {
      if (secretNum > userTry)
        alert('The number I picked is higher than your guess');
      else if (secretNum < userTry)
        alert('The number I picked is lower than your guess ');
    }
    // Repeat until the user cancells the game or if the user guessed the number
  } while (!gameCancelled && userTry != secretNum);

  // Inform the user that he guessed the number
  !gameCancelled && alert(`You guessed it in ${numTries} tries: `);

  // Reapeat while the user wants more rounds.
} while (!gameCancelled && confirm('Do you want to play again?'));

if (gameCancelled) console.info('Game cancelled');
else console.info('Thanks for playing');
