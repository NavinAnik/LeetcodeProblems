/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   let s1 =s.split("").sort().join("");
   let t1 =t.split("").sort().join("");
   if(s1===t1){
       return true;
   }
   else {
       return false;
   }
    
};