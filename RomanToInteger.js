// first, create an object to reference what the roman numerals are and what they represent

const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

var romanToInt = function(s) {
//     declare variable to act as a running total
    let acc = 0
//     roman numeral will be a string, strings can be iterated over
//     use for loop to go over each character in the string passed to the function
    for (let i = 0; i < s.length; i++) {
//         use if statements to determine value of the strings
//         look at character at index i and the following index to check for 4s and 9s
//         else state at the end adds everything else
        if (s[i] === "I" && s[i+1] === "V") {
            acc += 4
            i++
        } else if (s[i] === "I" && s[i+1] === "X") {
            acc += 9
            i++
        } else if (s[i] === "X" && s[i+1] === "L") {
            acc += 40
            i++
        } else if (s[i] === "X" && s[i+1] === "C") {
            acc += 90
            i++
        } else if (s[i] === "C" && s[i+1] === "D") {
            acc += 400
            i++
        } else if (s[i] === "C" && s[i+1] === "M") {
            acc += 900
            i++
        } else {
            acc += romans[s[i]]
        }
    }
    return acc
};
