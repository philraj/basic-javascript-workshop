//generate random number between 1  and 100
var answer = Math.floor( Math.random() * 100) + 1;
var guess;
var attempts = 4;

for (attempts; attempts > 0; attempts--) {
    
    guess = Number(prompt("Please guess a number from 1 to 100. You have " + attempts + " guesses left."));
    
    if (guess === answer) 
    {
        alert("You win!");
        break;
    }
    else if (attempts > 1) 
    {
        var hint = '';
        
        if (guess < answer) hint = "higher";
        else if (guess > answer) hint = "lower";
        
        alert("Wrong! Try again. The correct answer is " + hint + ".");
    }
    else 
    {
        alert("You lose! The answer was " + answer);
    }
    
}