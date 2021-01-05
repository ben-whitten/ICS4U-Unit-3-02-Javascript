/*
* The Main program implements an application that
* recreates the factorial program.
*
* @author  Ben Whitten
* @version 1.0
* @since   2021-1-5
*/

// Defining require and process
/*eslint no-undef: "error"*/
/*global require*/
// Defining prompt for getting user input.

const prompt = require('prompt-sync')({sigint: true});

///////////////////////////////////////////////////////////////////////////////
  
// Recreation of the factorial function.
function factorial(someInt) {
  if (someInt == 1) {
    return 1;
  } else {
    return (someInt * factorial(someInt - 1));
  }
}

/////////////////////////////////////////////////////////////////////////////


// Handels the inputs and outputs.
try {

  console.log("Input an integer (above 0):");

  var someInt = prompt("");

  // Making sure the var is a number.
  if (Number.isNaN(someInt) || someInt <= 0) {
    console.log("Error: Invalid Input");
    
  } else {
    var answer = factorial(someInt);

    console.log("Your new number is: " + answer);
  }

} catch (err) {
  console.log("Error: Invalid Input");
}

/////////////////////////////////////////////////////////////////////////////
