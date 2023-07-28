/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let str = "";
    let sum = 0;
    while(n !== 0){
        str = str + n % k;
        n = Math.floor(n / k);
    }
    for(let i = 0;i<str.length;i++){
        sum = sum + parseInt(str[i]);
    }
    return sum;
};