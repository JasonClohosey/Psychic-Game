var num = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];

var wins = 0
var quessesLeft = 3

var winsText = document.getElementById("score");
var guessText = document.getElementById(numGuesses);


compPick = num[Math.floor(Math.random() * num.length)];
  console.log("random number", compPick); 

document.getElementById("1").onclick = function(event, userPick) {
    userPick = document.getElementById("1").value;
    console.log("this is the user pick " + userPick);
};
document.getElementById("2").onclick = function(event, userPick) {
    userPick = document.getElementById("2").value;
    console.log("this is the user pick " + userPick);
};
document.getElementById("3").onclick = function(event, userPick) {
    userPick = document.getElementById("3").value;
    console.log("this is the user pick " + userPick);
};
document.getElementById("4").onclick = function(event, userPick) {
    userPick = document.getElementById("4").value;
    console.log("this is the user pick " + userPick);
};
document.getElementById("5").onclick = function(event, userPick) {
    userPick = document.getElementById("5").value;
    console.log("this is the user pick " + userPick);
};
document.getElementById("6").onclick = function(event, userPick) {
    userPick = document.getElementById("6").value;
    console.log("this is the user pick " + userPick);
};
document.getElementById("7").onclick = function(event, userPick) {
    userPick = document.getElementById("7").value;
    console.log("this is the user pick " + userPick);
};
document.getElementById("8").onclick = function(event, userPick) {
    userPick = document.getElementById("8").value;
    console.log("this is the user pick " + userPick);
};
document.getElementById("9").onclick = function(event, userPick) {
    userPick = document.getElementById("9").value;
    console.log("this is the user pick " + userPick);
};
document.getElementById("10").onclick = function(event, userPick) {
    userPick = document.getElementById("10").value;
    console.log("this is the user pick " + userPick);
};

