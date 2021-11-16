// Write code to create a function that accepts a string and determines if the string is a valid number. You may not use any regex, built-in methods type conversion to accomplish this.

var isNumeric = function (str) {
    //create variable for all numerical digits
    var digits = {
        0: true,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true
    };

    //set has number and has decimal to false
    var hasNum = false;
    var hasDecimal = false;

    //iterate through the given string
    for (var i = 0; i < str.length; i++) {
        //characters is equal to every index in the string
        var char = str[i];

        //if the digits and characters are the same then return true
        if (digits[char]) {
            hasNum = true;
            continue;
        }

        // if not a number or char continue
        if (i === 0) {
            if (char === "-" || char === "+") {
                continue;
            }
        }

        // if runs into a period, then has decimal is tru
        if (char === ".") {
            if (hasDecimal === true) {
                return false;
            }

            hasDecimal = true;
            continue;
        }

        return false;
    }

    if (hasNum) {
        return true;
    }

    return false;
};
