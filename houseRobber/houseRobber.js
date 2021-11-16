// You are a robber planning to rob houses along a street. Each house has a certain amount of money stashed. However, you cannot rob any two adjacent houses.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob given the constraint. For example, if the list was [1,2,3,1], the max you can rob is 4 (house at index 0 and 2). If the list was [10, 1, 899, 1000], the max you can rob is 1010 (house at index 0 and 3).

const maxStolenValue = houses => {
    // if there are no houses, return 0
    if (houses.length === 0) return 0;
    //if only one house, return just that house
    if (houses.length === 1) return houses[0];

    // store the best solution so far in an array
    // Math.max is giving largest between two houses, is telling while has max
    // just giving starting position
    const bestSolutions = [houses[0], Math.max(houses[0], houses[1])];

    // for loop, starting at 2 because we know what the first two are

    for (let i = 2; i < houses.length; i++) {
        // the next best solution is either considering robbing the previous house,
        // which means taking the previous best solution (bestSolutions[i - 1]),
        // or by considering robbying the current house
        const nextBest = Math.max(
            //checking index and adding index of [0]
            houses[i] + bestSolutions[i - 2],
            // seeing if greater than index of 0
            bestSolutions[i - 1]
        );
        //pushing whatever the best is to the solutions
        bestSolutions.push(nextBest);
        
    }
    console.log(bestSolutions)
    return bestSolutions[bestSolutions.length - 1];
};

const houses = [1, 6, 90, 75, 100, 101]
maxStolenValue(houses)
