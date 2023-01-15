// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
//     For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
function squareSum(numbers){
    const mult = a => a * a
    const reducer = (acc, current) => acc + current
    return Array.from(numbers, mult).reduce(reducer, 0)
}