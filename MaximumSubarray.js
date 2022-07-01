var maxSubArray = function(nums) {
    
//  initialize variables that will hold the current sum being worked on
//  and the maximum sum that has been found so far
    let currentSum = nums[0]
    let maximumSum = nums[0]
    
//  use for loop to iterate through nums
//  set i = 1 due to declaring the above variables as the starting index of nums
    for (let i = 1; i < nums.length; i++){
        
//      Math.max() will return either the current the value of the element of current index
//      OR currentSum plus the value of the current element, whichever is largest
        currentSum = Math.max(nums[i], currentSum + nums[i])
        
//      if the sum of the elements in the current subarray is larger than the current maximum sum
//      set maximumSum equal to currentSum
        if (currentSum > maximumSum){
            maximumSum = currentSum
        }
    }
    return maximumSum
};
