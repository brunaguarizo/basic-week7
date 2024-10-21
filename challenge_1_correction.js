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
Question: Solve the mathematical equation: number1 + number2

variable number1 
variable number2 
variable operator is +
variable answer = number1 + number2

guess is equal to the answer: Congratulations, it's correct!
guess is different to the answer: Sorry, this is incorrect. 

if incorrect: check how close
guess <= answer+5 && guess => answer-5 : Very close!
guess <= answer+2 && guess => answer-2 : Almost correct!

tries start at 0
everytime that the code runs, adds 1
tries limite is 3

 ----------------------------------- PLANNING ----------------------------------- */

//determine a proper parameter variable name
function MathGame(paramNumber1, paramNumber2, paramOperator, paramGuess) {
  let number1 = paramNumber1;
  let number2 = paramNumber2;
  let operator = paramOperator;
  let guess = paramGuess;
  
  let answer = 0;
  if (operator === "+"){
  answer = number1 + number2
 } else if (operator === "-"){
  answer = number1 - number2
 } else if (operator === "*"){
  answer = number1 * number2
 } else if (operator === "/"){
  answer = number1 / number2
 }
 
 
 if (guess === answer){
  console.log("Congratulations, it's correct!");
} else {
  console.log("Sorry, this is incorrect. ");

  if (guess <= answer+2 && guess >=answer-2){
    console.log("Almost correct!");
  } else if (guess <= answer+5 && guess >= answer-5){
    console.log("Very close!");
  } 
} 
}

let tries = 0;

//determine a proper question to ask and the proper variable name for the answer
readline.question("Choose the first number: ", (number1) => {
  readline.question("Choose the second number: ", (number2) => {
    readline.question("Choose the math operator: ", (operator) => {
      
      //make an infinite recall for guessing question
      function StartGame() {
    
        //determine a proper question to ask and the proper variable name for the user to guess
        readline.question("Guess the answer: ", (guess) => {
          
          //call your function here
          tries = tries+1;
          MathGame (Number(number1), Number(number2), operator, Number(guess));

          if (guess === "quit") {
            readline.close();
          } else {
              if (tries >= 3){
                console.log("No more attemps left")
                readline.close();
              } else { 
                StartGame();

              }
          }
        });
      }
    
      StartGame();
    })
  })
});
