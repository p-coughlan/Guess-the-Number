//let ranNum
//let attemptsNum
//et userGuess = 0
// ---------------- FUNCTIONS ---------------------------

// generate random number
function genRanNum() {
    ranNum = Math.floor(Math.random() * 100 + 1);
  
    //displaynumber
    document.getElementById('displayNumber').innerHTML = ranNum;
  }
  
  //take users guess
  function submitGuess() {
    //userGuess = document.getElementById("userGuess").value;
    let guess = document.getElementById('userGuess').value;
    console.log(guess);
  
    // Check if the input is a valid number
    
 
    //increment number of attempts?
    attempts++; 
  
    // Compare the user's guess with the random number
  }
  
  // ---------------- MAIN PROCESSING ---------------------
  
  genRanNum();
console.log(ranNum);
  