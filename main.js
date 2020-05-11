var num = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];

var wins = 0
var guessesLeft = 3

var winsText = document.getElementById("score");
var guessText = document.getElementById("numGuesses");

function compPickAgain() {
    compPick = num[Math.floor(Math.random() * num.length)];
    console.log("random number", compPick);
}
compPick = num[Math.floor(Math.random() * num.length)];
    console.log("random number", compPick);
    


document.getElementById("1").onclick = function(event, userPick) {
    userPick = document.getElementById("1").value;
    console.log("this is the user pick " + userPick);
    runGame(userPick)
};
document.getElementById("2").onclick = function(event, userPick) {
    userPick = document.getElementById("2").value;
    console.log("this is the user pick " + userPick);
    runGame(userPick)
};
document.getElementById("3").onclick = function(event, userPick) {
    userPick = document.getElementById("3").value;
    console.log("this is the user pick " + userPick);
    runGame(userPick)
};
document.getElementById("4").onclick = function(event, userPick) {
    userPick = document.getElementById("4").value;
    console.log("this is the user pick " + userPick);
    runGame(userPick)
};
document.getElementById("5").onclick = function(event, userPick) {
    userPick = document.getElementById("5").value;
    console.log("this is the user pick " + userPick);
    runGame(userPick)
};
document.getElementById("6").onclick = function(event, userPick) {
    userPick = document.getElementById("6").value;
    console.log("this is the user pick " + userPick);
    runGame(userPick)
};
document.getElementById("7").onclick = function(event, userPick) {
    userPick = document.getElementById("7").value;
    console.log("this is the user pick " + userPick);
    runGame(userPick)
};
document.getElementById("8").onclick = function(event, userPick) {
    userPick = document.getElementById("8").value;
    console.log("this is the user pick " + userPick);
    runGame(userPick)
};
document.getElementById("9").onclick = function(event, userPick) {
    userPick = document.getElementById("9").value;
    console.log("this is the user pick " + userPick);
    runGame(userPick)
};
document.getElementById("10").onclick = function(event, userPick) {
    userPick = document.getElementById("10").value;
    console.log("this is the user pick " + userPick);
    runGame(userPick)
};

function runGame(userPick) {
    if (userPick == compPick) {
        document.getElementById("comp-guess").innerHTML = "You guessed right!  I was thinking  " + compPick + "!  I'm thinking of a new number.  Try to guess that one too.";
        wins++;
        guessesLeft = 3;
        compPickAgain();
    
    }
    else if (guessesLeft == 3) {
        document.getElementById("comp-guess").innerHTML = "Wrong!  Guess Again.";
        guessesLeft--;
    }
    else if (guessesLeft == 2) {
        document.getElementById("comp-guess").innerHTML = "Nope, Still wrong!  One more guess.";
        guessesLeft--;
    }
    else if (guessesLeft == 1) {
        document.getElementById("comp-guess").innerHTML = "Sorry you lose.  I guess you don't have any psychic abilities.  The number I was thinking of was " + compPick + ".  Try again!";
        guessesLeft = 3;
        compPickAgain();
    };
    winsText.innerHTML = "Score: " + wins;
    guessText.innerHTML = "Guesses left: " + guessesLeft;
};