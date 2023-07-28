/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function a (n) {
    if(n === 1){
        return true;
    }
    else if( n <1){
        return false;
    }
    return a(n/2);
};