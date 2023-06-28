/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let nums3 = [];
    
    for(let i = 0;i<nums1.length;i++){
        let flag = false;
        for(let j = 0;j<nums2.length;j++){
            if( flag === false && nums1[i]===nums2[j]){
                let temp = nums1[i];
                nums3.unshift(temp);
                nums2.splice(j,1);
                flag = true;
            }
        }
    }

    return nums3;
};