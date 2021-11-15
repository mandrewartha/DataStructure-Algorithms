// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function (str) {
    var result = "";
    //split string on words and make sure all letters are lowercase
    var words = str.toLowerCase().split(" ");

    //iterate through and capitalize first letter or all but the first word
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
                //split word into letters top capitalize first one
        var letters = word.split("");

           //if first letter, capitalize
        if (i > 0) {
            letters[0] = letters[0].toUpperCase();
        }

         //join string back together with no space
        result += letters.join("");
    }

        //return string
    return result;
};
