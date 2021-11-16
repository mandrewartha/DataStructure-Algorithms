// boldQuery
// given string, make a certain word bold
// query is word trying to bold
// result is an array
function highlightResult(query, result) {
    //creating an empty array
    let highlightedResult = [];

    // build highlighted version of result
    // splitting result in to array of elements
    const splitArray = result.split(" ")
    // iterate through the new split array
    for (let i = 0; i < splitArray.length; i++) {
        //element is each index of the array
        let element = splitArray[i];
        // if query is in the element
        if (element.includes(query)) {
            //replace all takes in thing to replace and what to replace with
            element = element.replaceAll(query, `<b>${query}</b>`);
        }
        //push new element to the array
        highlightedResult.push(element)
    }
    //return array where everything is joined back up
    return highlightedResult.join(" ");
};
