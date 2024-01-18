/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<3) return n;
    let count = 0;
    const arr = [1,2];

    for(let i = 3; i<n+1;i++){
        [arr[0] , arr [1]] = [arr[1], arr[0] + arr[1]  ]
    }

    return arr[1];
    
};