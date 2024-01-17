/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    arr.sort((a, b) => a - b);
    let temp = [];
    for(let i =0;i<arr.length;i++)
    {
        let sum = 1;
       while (i + 1 < arr.length && arr[i] === arr[i + 1]) {
            sum++;
            i++;
        }
        temp.push(sum);
    }
    temp.sort((a,b)=> a-b);
    for(let i = 1; i<temp.length;i++){
        if(temp[i] === temp[i-1]) return false;
    }
    return true;
};