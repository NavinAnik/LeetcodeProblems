/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    
    let reverseBit = 0;

    for(let i = 0;i<32;i++){
        reverseBit = reverseBit*2+ n%2;
        n>>>=1;
    }

    return reverseBit;
};