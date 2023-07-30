/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let result = Infinity;
    let temp;
    if(num<10){
        return num;
    }
    else{
        while(true){
            if(result<10){
                return result;
            }

            temp = (num%10) + Math.floor(num/10);
            result = temp;
            num = temp;
        }
    }

    
};