const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Create a function that determines the appropriate message for a person based on their age regarding gym membership options.

- If the person is under 12, they should be told "too young for membership".
- If they are between 12 and 15, they should be told "eligible for junior membership".
- If they are between 16 and 59, they should be told "eligible for standard membership".
- If they are 60 or older, they should be told "eligible for senior membership".

*/

/* PLANNING
Question: Hello, how old are you so I can show you the best membership to you? :)
memberAge < 12 : Sorry, you are too young for a membership.
memberAge >= 12 && <= 15 : Ok, you can have a junior membership.
memberAge >= 16 && <= 59 : You are elegible for a standard membership.
memberAge >= 60 : Great, you can have a senior membership.
*/

//determine a proper parameter variable name
function CheckGymMembershipEligibility(age){

  let memberAge = age;

  if(memberAge < 12){
    console.log("Sorry, you are too young for a membership.");
  } else if(memberAge >= 12 && memberAge <= 15){
    console.log("Ok, you can have a junior membership.");
  } else if(memberAge >= 16 && memberAge <= 59){
    console.log("You are elegible for a standard membership.");
  } else if(memberAge >= 60){
    console.log("Great, you can have a senior membership.");
  }

}

function StartApp(){
  readline.question('Hello, how old are you so I can show you the best membership to you? :)? ', _age => {

    //call your function here.
    CheckGymMembershipEligibility(Number(_age))

    // readline.close();
    if(_age !== "quit"){
      StartApp();
    } else {
      readline.close();
    }
  });
}

StartApp();

/* 
With this "StartApp" function, you can repeatedly ask for input, improving user interaction. It makes a looping.
Also, the let memberAge variable, while it's not necessary, can make the code more readable or flexible.
The quit option gives the user control over when to stop the app.
*/