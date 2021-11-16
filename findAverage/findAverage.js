const grades = [56, 78, 99, 85];

// We receive the accumulator, currentValue, index, and the array from the reduce method.
function findAverage(accumulator, currentValue, index, array) {
    // Check to see if we are at the end of the given array.
    //at end of the array this if statement will hit
    // accumulator is the number that is being added to each time
    // when we are at the end it has accumulated all the numbers up until current(end)value and is then
    // divided
    if (index === array.length - 1) {
        // Once we have reached the end of the array we divide by how many elements are in the given array.
        return (accumulator + currentValue) / array.length;
    }
    console.log(accumulator)

    // will run until we find the end of the array 
    // Add the current value to our total.
    return accumulator + currentValue
}

// Pass the 'findAverage' function into the reduce method.
// function is returning a number
// taking in the returned accumulator and current value and reducing to one number
let gradeAverage = grades.reduce(findAverage);

// log the 'gradeAverage' variable to see the result.
console.log(gradeAverage);
