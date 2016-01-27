//takes a string and returns the first character of the string.
function firstChar (string) {
    return string[0];
}

console.log("Testing firstChar()...");
console.log("Cat -> " + firstChar("Cat"));
console.log("DecodeMTL -> " + firstChar('DecodeMTL'));
console.log("empty string -> " + firstChar(""));
console.log();





//takes a string and returns the last character of a string.
function lastChar (string) {
    return string[string.length - 1];
}

console.log("Testing lastChar()...");
console.log("JavaScript -> " + lastChar("JavaScript"));
console.log("explosion -> " + lastChar("explosion"));
console.log("empty string -> " + lastChar(""));
console.log();





//takes a string and a number, and returns the character at the position 
//represented by the number. 
function charAt (string, position) {
    return string[position];
}

console.log("Testing charAt()...");
console.log("chocolate -> " + charAt("chocolate", 3));
console.log("starfish -> " + charAt("starfish", 6));
console.log("empty string -> " + charAt("", 0));
console.log();





//takes two numbers and adds them together. 
//When providing inputs other than numbers, unexpected results can occur, such as 
//false + true giving 1. If a string is provided, JS will convert the other input
//to a string and concatenate the two.
function add (n1, n2) {
    return n1 + n2;
}

console.log("Testing add()...");
console.log("5 and 7 ... " + add(5,7));
console.log("20 and 75,000,389 ... " + add(20, 75000389));
console.log("0 and 0 ... " + add(0,0));
console.log("false and true ... " + add(false, true));
console.log("Watermelon and 9000... " + add("Watermelon", 9000));
console.log();





//takes two numbers and multiplies them together.
//When passing something other than a number, the result is either NaN, or if 
//one of the input can be converted easily into a number, the JS engine will do 
//so and proceed as normal. 
function multiply (n1, n2) {
    return n1 * n2;
}

console.log("Testing multiply()...")
console.log("3 and 9... " + multiply(3,9))
console.log("50 and 50000 ... " + multiply(50,50000))
console.log("House and Plant ... " + multiply("House", "Plant"))
console.log("5 and '5'... " + multiply(5,'5'))
console.log()





//takes two numbers and an operation. If operation is ‘add’, returns the sum of 
//the numbers. If operation is ‘subtract’, returns the difference. If operation 
//is ‘mult’, return the product. If operation is ‘div’, return the ratio. 
//Otherwise returns 0. NO INPUT VALIDATION!
function operator (operation, n1, n2) {
    switch (operation) {
        case 'add':
            return n1 * n2;
        case 'subtract':
            return n1 - n2;
        case 'mult':
            return n1 * n2;
        case 'div':
            return n1 / n2;
        default:
            return 0;
    }
}

console.log("Testing operator()...")
console.log("add, 10, 5... " + operator('add', 10, 5))
console.log("subtract, 18, 9... " + operator('subtract', 18, 9))
console.log("mult, 7, 7... " + operator('mult', 7, 7))
console.log("div, 10, 9... " + operator('div', 10, 9))
console.log()





//takes a string and a number and returns the string repeated that many times.
function repeatString (string, numOfTimes) {
    var repeatedString = "";
    
    for (var i = 0; i < numOfTimes; i++) {
        repeatedString += string;
    }
    
    return repeatedString;
}

console.log("Testing repeatString()...")
console.log("zebra, 3... " + repeatString('zebra', 3))
console.log("xylophone, 5... " + repeatString('xylophone', 5))
console.log("empty string, 20... " + repeatString('', 20))
console.log()





//takes a string, and returns the reverse of that string.
function reverse (string) {
    var reversedString = "";
    
    for (var i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    
    return reversedString;
}

console.log("Testing reverse()...")
console.log("anteater ... " + reverse('anteater'))
console.log("fluorescent ... " + reverse('fluorescent'))
console.log("empty string ... " + reverse(""))
console.log()




//takes number, returns factorial of that number.
function factorial (number) {
    if (number >= 2) {
        return factorial (number - 1);
    }
    else if (number === 1 || number === 0) {
        return 1;
    } 
    else {
        return "Invalid input to factorial!";
    }
}

console.log("Testing factorial()...")
console.log("5 ... " + factorial(5))
console.log("10 ... " + factorial(10))
console.log("-20 ... " + factorial(-20))
console.log()





//