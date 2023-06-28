/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let s2 = [];
    for(let i = s.length-1;i>=0;i--){
        s2.push(s[i]);
    }

    for(let i = 0;i<s.length;i++){
        s[i]=s2[i];
    }
    
   
};