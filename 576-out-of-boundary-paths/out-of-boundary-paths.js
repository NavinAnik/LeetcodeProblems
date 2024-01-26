/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
   let dp = new Array(m).fill(null).map(() =>
        new Array(n).fill(null).map(() =>
            new Array(maxMove + 1).fill(-1)
        )
    );

    const mod = 1e9+7

    const path = (moves, x,y) => {
        if(x<0 || x>=m || y<0 || y>=n ) return 1;

        if(moves <= 0) return 0;

        if(dp[x][y][moves] !== -1) {
            return dp[x] [y] [moves];
        }

        let res = 0;

        res = (res + path(moves-1, x+1, y)) %mod;
        res = (res + path(moves-1, x-1, y)) %mod;
        res = (res + path(moves-1, x, y+1)) %mod;
        res = (res + path(moves-1, x, y-1)) %mod;

        dp[x] [y] [moves] = res;

        return res;
    }

    return path(maxMove,startRow, startColumn);
};