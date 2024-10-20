const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
Create a function that simulates a simple word guessing game. The function will take in a secret word and a user's guess as parameters. It will then compare the user's guess to the secret word.

- If the user's guess matches the secret word exactly, display "Correct! You've guessed the word!"
- If the user's guess does not match, display "Incorrect! Try again."

BONUS DIFFICULTY!!!
- If the user's guess shares the first letter with the secret word, display "You got the first letter right!"
- If the user's guess shares the first and last letter with the secret word, display "Almost Correct!"


BONUS DIFFICULTY2!!!
- If the user's secret word has less than 5 letters or more than 10 letters, the user will be asked to remake the secret word
- This means you need to write a function to intervene before the 2nd readline question to make sure the secret word follows a rule
*/

function validateSecretWord(secretWord) {
  if (secretWord.length < 5 || secretWord.length > 10) {
    console.log("The secret word must be between 5 and 10 letters.");
    return false;
  }
  return true;
}

function WordGuess(secretWord, userGuess) {
  if (userGuess === secretWord) {
    console.log("Correct! You've guessed the word!");
    readline.close();
  } else if (userGuess[0] === secretWord[0] && userGuess[userGuess.length - 1] === secretWord[secretWord.length - 1]) {
    console.log("Almost Correct! You got the first and last letters right.");
  } else if (userGuess[0] === secretWord[0]) {
    console.log("You got the first letter right!");
  } else {
    console.log("Incorrect! Try again.");
  }
}

readline.question("Please enter a secret word: ", (secretWord) => {
  if (!validateSecretWord(secretWord)) {
    console.log("Please restart the game and enter a valid word.");
    readline.close();
  } else {
    function StartGame() {
      readline.question("Guess the word: ", (userGuess) => {
        if (userGuess === "quit") {
          console.log("Game ended.");
          readline.close();
        } else {
          WordGuess(secretWord, userGuess);
          StartGame();
        }
      });
    }
    StartGame();
  }
});
