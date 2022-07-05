// nums = an array of ints
// target = number the elements at the indices given in the output must add up to
// function must return TWO indices
// may not use the same element twice

// can use for loop to iterate through array
// function shouldn't check index i against j for the answer

var twoSum = function(nums, target) {
//  initialize answer variable so it can be referenced and returned
    let answer = []
    
// nested for loop lets us easily check one index against others to see if their sum === target
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target){
                answer.push(i)
                answer.push(j)
                return answer
            }
        }
    }
};
