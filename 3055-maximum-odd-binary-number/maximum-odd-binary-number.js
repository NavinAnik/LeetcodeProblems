/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
   if (s.length <= 1) {
        return s; 
    }
    
    let bit = s.split('');
    let str = "";
    let count = 0;
    for (let i = 0; i < bit.length; i++) {
        if(bit[i]==='1')count++;
    }
    
    for (let i = 0; i < bit.length-1; i++) {
        if(count>1){
            str += '1';
            count--;
        }
        else{
            str+='0';
        }
    }
    str=str+1;
    
    return str;
    
};