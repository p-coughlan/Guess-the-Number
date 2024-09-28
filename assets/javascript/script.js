// GAME NOT WORKING - NEED TO DEBUG!!!!!!!!!! 
//------------------ VARIABLES ---------------------------


let isRanNumGenerated = false;
let attempts = 0;
let ranNum 

// ---------------- FUNCTIONS ---------------------------

// generate random number
    function genRanNum() {
        //add a check to see if the random number has already been generated - sets a flag to true if it has
        if (!isRanNumGenerated) {
            ranNum = Math.floor(Math.random() * 99 + 1);
            isRanNumGenerated = true;
        }
}

//display number once user has guessed
    function displayNumber() {
        document.getElementById('displayNumber').innerHTML = ranNum;
}
  
//take users guess
    function submitGuess() {
        let guess = document.getElementById('userGuess').value;
//console.log(guess);
  
// Check if the input is a valid number
    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('resultText').innerHTML = "Please enter a valid number between 1 and 100.";
        return;
    }
//increment number of attempts?
    attempts++; 
  
// Compare the user's guess with the random number
        
    if (guess === ranNum) {
        document.getElementById('resultText').innerHTML = "Congratulations! You guessed the correct number" + ranNum +  " in " + attempts + "attempts.";
        displayNumber()
    } else if (guess > ranNum) {
        document.getElementById('resultText').innerHTML = "Too high! Try lower...";
    } else {
        document.getElementById('resultText').innerHTML = "Too low! Try higher...";
    }
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



