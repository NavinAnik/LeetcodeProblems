/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let buy = prices[0];
    for(let i = 0;i<prices.length;i++){
        if(buy>prices[i]){
            buy = prices[i];
        }
        else if(prices[i]-buy>profit){
            profit =  prices[i]-buy;
        }
    }
    
    return profit;
 }