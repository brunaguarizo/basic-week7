const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

/* ----------------------------------- INSTRUCTIONS  -----------------------------------

Create a function that simulates a simple word guessing game. The function will take in a secret word and a user's guess as parameters. It will then compare the user's guess to the secret word.

- If the user's guess matches the secret word exactly, display "Correct! You've guessed the word!"
- If the user's guess does not match, display "Incorrect! Try again."

BONUS DIFFICULTY!!!
- If the user's guess shares the first letter with the secret word, display "You got the first letter right!"
- If the user's guess shares the first and last letter with the secret word, display "Almost Correct!"


BONUS DIFFICULTY2!!!
- If the user's secret word has less than 5 letters or more than 10 letters, the user will be asked to remake the secret word
----------------------------------- INSTRUCTIONS  ----------------------------------- */


/* ----------------------------------- PLANNING -----------------------------------
Question: Guess the secret word:

variable secretWord 
variable guessWord 

guess is equal to the answer: Congratulations! You've guessed the word.
guess is different to the answer: Sorry, this is incorrect. Try again! 

----------------------------------- PLANNING ----------------------------------- */

//determine a proper parameter variable name
function WordGuess(paramSecretWord, paramGuess) {
  let secret = paramSecretWord;
  let guess = paramGuess;

  if (secret === guess) {
    console.log("Correct! You've guessed the word!");
    return true; // End the game when guessed correctly
  } else {
    console.log("Incorrect! Try again.");
    
    if (secret[0] === guess[0]) {
      console.log("You got the first letter right!");
    }
    if (secret[secret.length - 1] === guess[guess.length - 1]) {
      console.log("You got the last letter right. Almost Correct!");
    }
    return false; // Continue the game
  }
}

//determine a proper question to ask and the proper variable name for the answer
// wrap everything under a function
function MakeQuestion() {
  readline.question("Define your secret word: ", (_secret) => {

    if (_secret.length >= 5 && _secret.length <= 10) {
      function StartGame() {
        //determine a proper question to ask and the proper variable name for the user to guess
        readline.question("Now, try to guess it: ", (_guess) => {
         
          //call your function here
          let gameEnded = WordGuess(_secret, _guess);

          if (_guess === "quit" || gameEnded) {
            readline.close(); // End the game if guessed correctly or if user types "quit"
          } else {
            StartGame(); // Continue guessing
          }
        });
      }
    
      StartGame();
    } else {
      console.log("Your secret word must have between 5 and 10 letters. Please try again.");
      MakeQuestion(); // Ask for a valid secret word again
    }
  });
}

MakeQuestion();



/* ----------------------------------- EXPLICACAO  -----------------------------------

CHALLENGE BONUS

The purpose of the new knowledge in this challenge is to test how comfortable and willing you are to try things out. You’ve never seen these syntax before, but are you willing to test even if there are:
1. High chance of failure or error
2. Lots of unknown outcomes
3. Perseverance to keep testing until it make sense

The first thing you want to do for this practice is test the function to see how everything works. Start with recognizing what each syntax does.

This means testWord.length outputs the number 5. So let’s write all of this down like a research format.

Syntax: testWord.length
- variable: testWord
- type: string
- suffix: .length
- outputs: 5

What does this mean? The word “abcde” has 5 letters. Adding .length to a string outputs the number of characters in the string.

Syntax: testWord[0]
- variable:testWord
- type:string
-suffix: [0]
- outputs: “a”

What does this mean? “a” is the first character in the string “abcde”. Adding [0] to a string outputs the first character of the string

Syntax: testWord[1], testWord[2], testWord[3], testWord[4]
- does the same as above except for the following characters

Syntax testWord[testWord.length-1]
- This is a combination of many things and it is probably super confusing. But if we break everything down it makes sense.
- [#] suffix is the character in accordance with the number. There are 5 letters, the number 0 gives the first character and the number 1 gives us the 2nd character all the way to number 4 which is the last character.
- Therefore the last character is basically the number of characters there are in the string minus 1 (testWord.length-1)
- suffix: [testWord.length-1]
- What does this mean? “abcde” has 5 characters. The last character “e” is outputted with the syntax testWord[4]. testWord.length is the number 5. 5-1 =4. Therefore testWord[testWord.length-1] is the same ast testWord[4] which is the last character “e”.

With that in mind, then everything is set and ready. Let’s take the previously made code. 
// linhas 48 a 54

And now on to the bonus. Remember the suffix [0] gives the first letter of the string.
That’s it! A simple if statement. Then we do the last character check. Remember that the suffix [string.length-1] gives the last character.
// linhas 54 a 63

Both checks are in place. Now if you want to only show 1 message and not the other then you should do.
This next difficulty (BONUS DIFFICULTY2)
First to do this we need to be able to recall the function.
// linhas 67 e 68

Then we need to check how many characters the variable secret has. Remember that the suffix .length gives the number of characters.
// linha 70

----------------------------------- EXPLICACAO  ----------------------------------- */
