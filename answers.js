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
        return number * factorial (number - 1);
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





//takes a phrase as a string, and returns the longest word in that phrase. 
//If the phrase contains more than one such word, returns the first occurrence.
function longestWord (phrase) {
    var words = phrase.split(' ');
    var longestIndex = 0;
    
    for (var i = 1; i < words.length; i++) {
        if (words[i].length > words[longestIndex].length) {
            longestIndex = i;
        }
    }
    
    return words[longestIndex];
}

console.log("Testing longestWord()...");
console.log("'What a beautiful day it is' ... " + longestWord('What a beautiful day it is'));
console.log("'I really like to code in JavaScript until I get bored' ... "
    + longestWord('I really like to code in JavaScript until I get bored'));
console.log()





//takes a phrase, and returns the same phrase with every word capitalized.
function capitalize (phrase) {
    //splits phrase into array of words
    var words = phrase.split(' ');
    
    //applies anonymous function to each word...
    //builds a new string out of the capitalized first letter,
    //plus the rest of the string set to lowercase, using slice
    //then puts it into capWords
    var capWords = words.map( function (word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });

    //joins the array of words back into a string
    return capWords.join(' ');
}

console.log("Testing capitalize()... ")
console.log("'tHis iS a PHRaSE iN aNnOying aLternATiNg CaPS!' ... "
    + capitalize('tHis iS a PHRaSE iN aNnOying aLternATiNg CaPS!'))
console.log("'hEllO woRlD!' ... " + capitalize('hEllO woRlD!'))





//takes an array and returns the largest number of the array
function largest (numbers) {
    return numbers.reduce(function (previous, current) {
        if (current > previous) return current;
        else return previous;
    });
}

console.log("Testing largest()...")
console.log("[3,6,9] ... " + largest([3,6,9]))
console.log("[12,11,5,18,3,5] ... " + largest([12,11,5,18,3,5]))
console.log();





//takes an array, and returns a filtered array.
//The filtered array only contains truthy values.
function truthy (array) {
    return array.filter( function (value) {
        return value;
    });
}

console.log("Testing truthy()...")
console.log("[true, false, 1] ..." + truthy([true, false, 1]))
console.log("[true, false, '', undefined, 50, 'Hello'] ... "
    + truthy([true, false, '', undefined, 50, 'Hello']))
console.log()





//takes an array of numbers, and returns the sum
function sumArray (array) {
    return array.reduce( function (previous, current) {
        return previous + current;
    }, 0);
}

console.log("Testing sumArray()...")
console.log("[1,2,3] ... " + sumArray([1,2,3]))
console.log("[9,8,7,6,5,4,3,2,1] ... " + sumArray([9,8,7,6,5,4,3,2,1]))
console.log()





//Write a function that takes two arrays, and returns 
//an array of all elements that are only in one array.
function uniqueValues (array1, array2) {
    //keep the elements that are not present in the other array,
    //then store in newArray1
    newArray1 = array1.filter( function (value) {
        //indexOf returns -1 if the value is not found in the specified array,
        //so this returns true if this value is not found in the other array
        return (array2.indexOf(value) === -1);
    })
    
    //do the same for the other array
    newArray2 = array2.filter( function (value) {
        return (array1.indexOf(value) === -1);
    })
    
    //combine the two new arrays
    var combinedArray = newArray1.concat(newArray2);
    
    //To filter out any remaining duplicates (which could exist if one array
    //had duplicate entries), Array.filter() is used one last time.
    //
    //The callback is given each value in the array, along with its index 
    //in the array. Array.lastIndexOf() is used to check if 
    //the index of this value is the last instance of the value in the array.
    //
    //If combinedArray.lastIndexOf(value) === index, this means that the
    //current value and the last instance of that value are at the same
    //position.
    return combinedArray.filter ( function (value, index) {
        return (combinedArray.lastIndexOf(value) === index);
    });
}

console.log("Testing uniqueValues()...")
console.log("[1,2,3] & [1,2,4,5] ... " + uniqueValues([1,2,3], [1,2,4,5]))
console.log("[1,3,5,7,9] & [5,7,9,11,13] ... "
    + uniqueValues([1,3,5,7,9], [5,7,9,11,13]))
console.log("[1,2,3,4,5] & [4,5,6,7,7,7] ... "
    + uniqueValues([1,2,3,4,5], [4,5,6,7,7,7]))   
console.log()





//takes an array and a function as arguments. Returns a new array that has the
//provided function applied to each element of the old array.
function myMap (array, func) {
    for (var i = 0; i < array.length; i++) {
        array[i] = func(array[i]);
    }
    
    return array;
}

console.log("Testing myMap()...")
console.log("[2,4,6] & function (val) {return val/2} ... "
    + myMap([2,4,6], function (val) { return val/2}))

