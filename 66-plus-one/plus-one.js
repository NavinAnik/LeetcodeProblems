/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let size = digits.length;
    let digit = digits;
    while(size !== 0){
        if(digit[size-1] !== 9){
            digit[size-1]++;
            return digit;
        }
        else {
            digit[size-1] = 0;
            size--;
            }
        
    }
    digit.unshift(1);
    return digit;
};