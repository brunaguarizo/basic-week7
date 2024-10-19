const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Create a function that determines the type of movie ticket a person should purchase based on their age.
- If the person is under 5, they should be given a "free" ticket.
- If they are between 5 and 12, they should be given a "child" ticket.
- If they are between 13 and 17, they should be given a "teen" ticket.
- If they are between 18 and 64, they should be given an "adult" ticket.
- If they are 65 or older, they should be given a "senior" ticket.
*/

/* PLANNING
Question: Hello, good evening! We have different discounts depending on your age. How old are you? :)
<= 5 : Great! You have a free ticket!
>= 6 && <= 12 : You have 50% of discount with the kid ticket.
>= 13 && <= 17 : Here it's your teen ticket. 
>= 18 && <= 64 : You have an adult ticket.
>= 65 : Great, you have 50% of discount with the senior ticket!
*/

//determine a proper parameter variable name
function DetermineTicketType(age){
  let ticketAge = age;

    if (ticketAge <= 5){
        console.log("Great! You have a free ticket!");
      } else if (ticketAge >= 6 && ticketAge <= 12){
        console.log("You have 50% of discount with the kid ticket.");
      } else if (ticketAge >= 13 && ticketAge <= 17){
        console.log("Here it's your teen ticket. ");
        } else if (ticketAge >= 18 && ticketAge <= 64){
        console.log("You have an adult ticket.");
      } else if (ticketAge >= 65){
        console.log("Great, you have 50% of discount with the senior ticket!");
      }
}


function StartApp(){
  readline.question(' Hello, good evening! We have different discounts depending on your age. How old are you? :) ', _age => {

    //call your function here.
    DetermineTicketType(Number(_age));
    // readline.close();
    if(_age !== "quit"){
      StartApp();
    } else {
      readline.close();
    }
  });
}

StartApp();