/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let sortedNum = [];
    for(let i = 0;i<nums.length;i++){
        sortedNum[i] = nums[i]*nums[i];
    }
    sortedNum.sort(function(a, b){return a - b});
    return sortedNum;
};