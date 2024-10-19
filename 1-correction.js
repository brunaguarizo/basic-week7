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
    let driveAge = age;
    
    if (driveAge < 16){
      console.log("You are too young to drive!");
    } else if (driveAge >= 16 && driveAge <= 17){
      console.log("You can drive, but with supervision.");
    } else if (driveAge >= 18 && driveAge <= 70){
      console.log("Go on, you can drive freely!");
      } else if (driveAge > 70){
      console.log("Maybe it's a good idea to consider ordering an Uber.");
    }
  }
  
  function StartApp(){
    readline.question('Hi there, I need your ID, please, to confirm if you can drive or not. How old are you?? ', _age => {
  
      //call your function here.
      CheckDrivingAge(Number(_age));
      // readline.close();
      if(_age !== "quit"){
        StartApp();
      } else {
        readline.close();
      }
    });
  }
  
  StartApp();