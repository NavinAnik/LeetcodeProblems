/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<2){
        return 1;
    }

    firstStep = 1;
    secondStep = 1;
    thridStep = 0;

    for(let i = 2;i<=n;i++){
        thridStep = firstStep + secondStep;
        firstStep = secondStep;
        secondStep = thridStep;
        
    }

    return thridStep;
};