const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});


/*

Create a function that simulates a simple math quiz game. The function will take in two numbers and an operator (+, -, *, /) as parameters. 
It will then calculate the correct answer and compare it to the user's guess.

- If the user's guess is correct, display "Correct!"
- If the user's guess is incorrect, display "Incorrect!" and provide the correct answer.

BONUS:
- If the user's guess is within 5 of the correct answer, display "Very Close!"
- If the user's guess is within 2 of the correct answer, display "Almost Correct!"

BONUS 2x DIFFICULTY:
- Set a variable outside the function to limit the number of attempts allowed.
- Track the number of attempts made with a variable starting at 0.
- Each time the function runs, increment the number of attempts made.
- If the number of attempts made reaches the limit, display "No more attempts left!" and end the game.

*/

/* ----------------------------------- PLANNING -----------------------------------
Question: Solve the mathematical equation: number1 operator number2.

variable number1 is 35
variable number2 is 7
variable operator is *
answer is 245

variable attemps start in 0
cont max attemps is 3

guess is equal to the answer: Congratulations, it's correct!
guess is different to the answer: Sorry, this is incorrect. The right answer is 245.
guess is between 240 and 250: You are very close!
guess is between 243 and 247: Almost correct, try again!

 ----------------------------------- PLANNING ----------------------------------- */


let attempts = 0; // Track the number of attempts
const maxAttempts = 3; // Limit on the number of attempts

function MathGame(Number1, Number2, Operator, Guess) {
  let Answer;
  switch (Operator) {
    case "+":
      Answer = Number1 + Number2;
      break;
    case "-":
      Answer = Number1 - Number2;
      break;
    case "*":
      Answer = Number1 * Number2;
      break;
    case "/":
      Answer = Number1 / Number2;
      break;
    default:
      console.log("Invalid operator");
      return;
  }

  if (Guess === Answer) {
    console.log("Congratulations, it's correct!");
  } else if (Math.abs(Guess - Answer) <= 2) {
    console.log("Almost correct, try again!");
  } else if (Math.abs(Guess - Answer) <= 5) {
    console.log("You are very close!");
  } else {
    console.log("Sorry, this is incorrect. The right answer is ", Answer);
  }
}

function StartGame() {
  if (attempts >= maxAttempts) {
    console.log("No more attempts left!");
    readline.close();
    return;
  }

  const Number1 = 35;
  const Number2 = 7;
  const Operator = "*";

  readline.question(`Solve the mathematical equation: ${Number1} ${Operator} ${Number2} = `, (Guess) => {
    Guess = (parseFloat)(Guess); // Convert the input to a number
    MathGame(Number1, Number2, Operator, Guess);
    attempts++;
    if (Guess !== "quit") {
      StartGame();
    } else {
      readline.close();
    }
  });
}

StartGame();
