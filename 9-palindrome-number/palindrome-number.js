/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = ""+x
    let size = y.length -1
    let str = "";
    while(size>=0){
        str = str + y[size];
        size--;
    }

    if(str === y){
        return true;
    }
    else{
        return false;
    }
};