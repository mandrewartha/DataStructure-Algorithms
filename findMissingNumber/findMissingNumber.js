const findMissingNumber = (arr, n) => {
    // the efficient solution is to use a binary search algorithm
    // since the numbers start from 1 to N, we know that each element
    // at position i should equal i + 1. Therefore, if start at the
    // middle element, and the element does not equal i + 1, then we
    // know the missing element is to the left (or it is the missing element)

    //sort array
    // adds scalability because now it can use unsorted arrays
    let sorted = arr.sort()
    console.log(sorted)
    //binary search
    let start = 0
    let end = arr.length - 1

    //don't want multiple loops for scalability.
    // while loop will run only once
    while(start <= end) {
        //start in middle
        // middle is the index of the array
        let middle = Math.floor((start + end) / 2)
        
        //if number equals middle
        // if number less
        // if numer is more
        // if number is not there
        if(sorted[middle] === n) {
            return true
        } else if (sorted[middle] < n){
            start = middle +1
        } else {
            end = middle - 1
        } 
    }
    //returning if missing or notreturn false
    console.log("number not found")
    return false
    
};

array = [1,6,3,9,5,]
findNumber(array, 6)
