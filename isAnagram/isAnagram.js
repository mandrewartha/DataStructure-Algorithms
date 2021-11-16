// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function (strA, strB) {
    // if not the same length, auto false
    if (strA.length !== strB.length) {
        console.log("different lengths, not anagram")
        return false;
    }

    //creating objects for numbers to be pushed to
    var aLetterMap = {};
    var bLetterMap = {};
    var strLength = strA.length;

    for (var i = 0; i < strLength; i++) {
        var aLetter = strA[i];
        var bLetter = strB[i];
        
        /putting these in to objects as keys
//         // plus 1 is counting how many times it is there, if there add 1
//         // or 0 is if letter is not in there, it is putting a number to add to
//         // if number already there just adding 1

        aLetterMap[aLetter] = (aLetterMap[aLetter] || 0) + 1;
        bLetterMap[bLetter] = (bLetterMap[bLetter] || 0) + 1;
    }

     // for in loop
     // going through object
     // every key in aLetterMap we want to do soemthing
    for (var key in aLetterMap) {
        if (aLetterMap[key] !== bLetterMap[key]) {
            console.log("is not anagram")
            return false;
        }
    }
console.log("is anagram")
    return true;
};
