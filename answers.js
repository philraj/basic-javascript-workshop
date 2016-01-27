// This is a one-line comment.

//takes a string and returns the first character of the string.
function firstChar (string) {
    return string[0];
}

console.log("Testing firstChar()...");
console.log(firstChar("Cat"));
console.log(firstChar('DecodeMTL'));
console.log(firstChar(""));

//takes a string and returns the last character of a string.
function lastChar (string) {
    return string[string.length - 1]
}

console.log("Testing lastChar()...");
console.log(lastChar("JavaScript"));
console.log(lastChar("explosion"));
console.log(lastChar(""));