/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n===1){
        return "1";
    }

    let str1 = countAndSay(n-1);
    let prev;
    let count = 0;
    let str = "";

    for(let i of str1){
        if(!prev){
            prev = i;
            count++;
            continue;
        }

        if(prev === i){
            count++;
        }
        else{
            str = str + count + prev;
            prev = i;
            count = 1
        }

    }

    return str + count + prev ;
};