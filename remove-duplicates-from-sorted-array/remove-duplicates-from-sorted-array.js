/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    for(let i = 0;i<nums.length;i++){
        if(nums[i]===nums[i+1]){
            
        }
        else{
        nums[k]= nums[i];
        k++;
        }
    }
    nums.splice(k,(nums.length-k));
    
};