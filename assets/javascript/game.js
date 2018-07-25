// Creates an array for all the options that the computer is able to pick from (a-z).
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create variables for number of wins and losses.
var wins = 0;
var losses = 0;

// Create an array that will hold the user's current guesses
var currentGuess = [];
var guessesLeft = 9;

//Computer will pick out a random selection from the array
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

//

function updateHTML() {
    var html =
        "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins:" + wins + "</p>" +
        "<p>Losses:" + losses + "</p>" +
        "<p>Guesses Left:" + guessesLeft + "</p>" +
        "<p>Your Guesses so far:" + currentGuess + "</p>";

    // // Change the HTML to reflect the updates
    document.getElementById("game").innerHTML = html;
}

function outcome(result) {
    
    if (result === "win") {
        wins++;
    }

    else if (result === "lose") {
        losses++;
    }

    //Then reset the brackets
    currentGuess = [];
    guessesLeft = 9;

    //Computer will pick out a new random selection from the array
    computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    updateHTML();
}

//This function activates when the user presses a key.
document.onkeyup = function (event) {


    //Holds the value of what key was pressed
    var userGuess = event.key;

    //In the case the user chooses a capital letter
    var userGuess = userGuess.toLowerCase();

    //Computer's current choice
    console.log("Computer's current guess is " + computerGuess);


    //To check if the js is reading the guesses correctly

    console.log(userGuess);
    //the score will increment wins score when the user guesses what the computer wants.

    // If the userguess is equal to the one of the computer choices
    if (computerChoice.includes(userGuess)/*the array of computerChoice*/) {

        //This will add the guess to the array
        currentGuess.push(userGuess);

        // if user guesses correctly
        if (userGuess === computerGuess) {
            outcome("win");
        }
        // if they run out of guesses
        else if (guessesLeft === 0) {
            outcome("lose");
        }
        // while thye still play the game
        else {
            guessesLeft--
        }
        // updates html so they can see what they can guess
        updateHTML();

        // //Reset the guesses left to 9 when the game ends and wipe the section to the left of your guesses so far
        // // if (currentGuess > 9){
        //     /// wipe arrary
        //     currentGuess = [];
    }
}





