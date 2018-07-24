// Creates an array for all the options that the computer is able to pick from (a-z).
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create variables for number of wins and losses.
var wins = 0;
var losses = 0;

// Create an array that will hold the user's current guesses
var currentGuess = [];
// Create a variable for the guess to hold temporarily
// var guess;

//This function activates when the user presses a key.
document.onkeyup = function (event) {

    //Computer will pick out a random selection from the array
    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    //Holds the value of what key was pressed
    var userGuess = event.key;

    //In the case the user chooses a capital letter
    var userGuess = userGuess.toLowerCase();

    //This will add the guess to the array
    currentGuess.push(userGuess);


    //To check if the js is reading the guesses correctly
    console.log(userGuess);
    //the score will increment wins score when the user guesses what the computer wants.

    // If the userguess is equal to the one of the computer choices
    if (userGuess === d/*the array of computerChoice*/) {

        if (userGuess === computerGuess) {
            wins++;
        } else {
            losses++;
        }

        //Create a variable to hold the html that will keep scores. 
        var html =
            "<h1>The Psychic Game</h1>"
        "<p>Guess what letter I'm thinking of</p>"
        "<p>Wins:" + wins + "</p>"
        "<p>Losses:" + losses + "</p>"
        "<p>Guesses Left:9</p>"
        "<p>Your Guesses so far:</p>"
        //Reset the guesses left to 9 when the game ends and wipe the section to the left of your guesses so far
    }

}

