/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let value = 0;
    for(let i = 0;i<nums.length;i++){
        value = value ^ nums[i];
    }

    return value;
};