/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let strToArr = s.split('')
    strToArr.sort()
    let strToArr2 = t.split('')
    strToArr2.sort()

     for (let j = 0; j < strToArr2.length; j++) {
        if (j > strToArr.length - 1) {
            return strToArr2[j]
        }else if(strToArr2[j]!==strToArr[j]){
            return strToArr2[j]
        }
       
     }
};