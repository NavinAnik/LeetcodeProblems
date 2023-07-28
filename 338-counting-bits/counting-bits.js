/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let nums = [];
    nums[0] = 0;
    for(let i = 1;i<=n;i++){
        if(i % 2 === 0){
            nums.push(nums [ Math.floor(i/2)]);
        }
        else{
             nums.push(nums [ Math.floor(i/2)]+1);
        }
    }
    return nums;

};