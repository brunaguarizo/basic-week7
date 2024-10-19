const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Create a function that determines the appropriate message for a person based on their age regarding driving privileges.
*/

/* PLANNING
Question: Hi there, I need your ID, please, to confirm if you can drive or not. How old are you?
< 16 = You are too young to drive!
>= 16 to =< 17 = You can drive, but with supervision.
>= 18 to <=70 = Go on, you can drive freely!
> 70 = Maybe it's a good idea to consider order an Uber.
*/


function CheckDrivingAge(age){
  
  if (age < 16){
    console.log("You are too young to drive!");
  } else if (age >= 16 && age <= 17){
    console.log("You can drive, but with supervision.");
  } else if (age >= 18 && age <= 70){
    console.log("Go on, you can drive freely!");
    } else if (age > 70){
    console.log("Maybe it's a good idea to consider ordering an Uber.");
  }
}

readline.question('Hi there, I need your ID, please, to confirm if you can drive or not. How old are you? ', age => {
  CheckDrivingAge(Number(age)); 
  readline.close();
});


/* 
In my code, I don't have the "StartApp" function, making necessary to node the file again every time that I put an answer.
I don't have a variable for the answer, what makes the code a little unflexible
And I don't have a quit option, there is no way to exit the app.
*/