// ---------------- FUNCTIONS ---------------------------

// generate random number
    function genRanNum() {
    ranNum = Math.floor(Math.random() * 100 + 1);
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
        
        if (userGuess === randomNumber) {
            document.getElementById('resultText').innerHTML = "Congratulations! You guessed the correct number " + ranNum +  " in " + attempts + "attempts.";
            function displayNumber()
        } else if (userGuess > randomNumber) {
            document.getElementById('resultText').innerHTML = "Too high! Try again.";
        } else {
            document.getElementById('resultText').innerHTML = "Too low! Try again.";
        }
  }
  
  // ---------------- MAIN PROCESSING ---------------------
  
// Initialize attempts
let attempts = 0;

// Add event listener to the submit button
//document.getElementById('submitGuess').addEventListener('click', submitGuess);

// Generate a random number
genRanNum();

// Display the random number

// Get users guess


