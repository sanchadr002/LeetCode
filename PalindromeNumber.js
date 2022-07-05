// x = integer
// function must return true if x is a palindrome

// we know we're working with conditionals because of true/false requirements
// can't iterate through ints, need to convert x to a string
// could split string into an array of characters, reverse, join, then compare new string to old one

var isPalindrome = function(x) {
    let string = x.toString()
    let reversedString = string.split('').reverse().join('')
    if (string === reversedString){
        return true
    } else {
        return false
    }
};
