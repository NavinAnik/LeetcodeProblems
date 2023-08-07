/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
       if(rowIndex < 1){
        return [1];
    }

    if(rowIndex === 1){
        return [1,1];
    }

    let triangle = [[1]];

    for(let i = 1; i<=rowIndex; i++){
        let prev = triangle[i-1];

        let curr = [];

        curr.push(1);

        for(let j = 1; j<prev.length;j++){
            curr [j] = prev [j] + prev[j-1];
        }

        curr.push(1);

        triangle.push(curr);


    }

    return triangle[rowIndex];
};