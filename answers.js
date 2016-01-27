// This is a one-line comment.

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

//takes a string and a number, and returns the character at the position represented by the number. 
function charAt (string, position) {
    return string[position];
}

console.log("Testing charAt()...");
console.log("chocolate -> " + charAt("chocolate", 3));
console.log("starfish -> " + charAt("starfish", 6));
console.log("empty string -> " + charAt("", 0));
console.log();

//takes two numbers and adds them together. 
//When providing inputs other than numbers, unexpected results can occur, such as false + true giving 1.
//If a string is provided, JS will convert the other input to a string and concatenate the two.
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