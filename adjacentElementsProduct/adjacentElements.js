function adjacentElementsProduct(inputArray) {
    //create product element
    let product = inputArray[0] * inputArray[1];

    //create for loop to loop through the array
    for (let i=1; i<inputArray.length; i++) {
        product = Math.max(product, inputArray[i] * inputArray[i+1])
    }

    //return product
    return product
}