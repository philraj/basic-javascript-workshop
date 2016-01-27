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