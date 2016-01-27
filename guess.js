//generate random number between 1  and 100
var randomInt = Math.floor( Math.random() * 100) + 1;

for (var i = 3; i >= 0; i--) {
    var guess = prompt("Please guess a number from 1 to 100.");
    
    if (guess === randomInt) {
        alert("You win!");
        break;
    }
    else if (i >= 0) {
        alert("Wrong! Try again. You have " + i + " guesses left.");
    }
    else {
        alert("You lose!");
    }
}