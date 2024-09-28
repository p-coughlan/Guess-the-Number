let isRanNumGenerated = false;
let ranNum;
let attempts = 0;

// Generate random number
function genRanNum() {
    if (!isRanNumGenerated) {
        ranNum = Math.floor(Math.random() * 99 + 1);
        isRanNumGenerated = true;
        console.log("Random number generated:", ranNum); // Debugging
    }
}

// Display number once user has guessed
function displayNumber() {
    document.getElementById('displayNumber').innerHTML = ranNum;
}

// Take user's guess
function submitGuess(event) {
    // Prevent the form from submitting
    event.preventDefault();

    let guess = parseInt(document.getElementById('userGuess').value, 10);
    console.log("User guess:", guess); // Debugging

    // Check if the input is a valid number
    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('resultText').innerHTML = "Please enter a valid number between 1 and 100.";
        console.log("Invalid input"); // Debugging
        return;
    }

    // Increment number of attempts
    attempts++;

    // Compare the user's guess with the random number
    if (guess === ranNum) {
        document.getElementById('resultText').innerHTML = "Congratulations! You guessed the correct number " + ranNum + " in " + attempts + " attempts.";
        displayNumber();
    } else if (guess > ranNum) {
        document.getElementById('resultText').innerHTML = "Too high! Try lower...";
    } else {
        document.getElementById('resultText').innerHTML = "Too low! Try higher...";
    }

    // Reset the input field
    document.getElementById('userGuess').value = "";
}
  
  // ---------------- MAIN PROCESSING ---------------------

// Generate random number
genRanNum();


  // Add event listener to the submit button? IN HTML ALREADY...
  //document.getElementById('submitGuess').addEventListener('click', submitGuess);


// ---------------------- NOTES -----------------------------
// 1. The random number should be generated only once, when the page is loaded. 
// 2. The random number should be displayed only after the user has guessed it.

// GAME NOT WORKING - NEED TO DEBUG!!!!!!!!!! 

//LEARNT: 
//ParseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
//isNAN() function determines whether a value is NaN or not
//!isNAN() - means if it is not a number
//adding a check to see if the random number has already been generated - using a boolean flag to set it to true if it has
//



