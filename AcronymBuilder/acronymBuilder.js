// Write code to create a function that accepts a string and returns an acronym for the given string, where the first letter of each word is Capitalized.

var acronymBuilder = function (str) {
    //split the string on the spaces
    var words = str.split(" ");
    
    // create a empty results string   
    var result = "";

    //create a for loop to loop through the words
    for (var i = 0; i < words.length; i++) {
    //capitalize the first letter in each word
        var word = words[i];
        result += word[0].toUpperCase();
    }
    //return a string of just the capitalized letters.
    return result;
};
