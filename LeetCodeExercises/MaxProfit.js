//Example 1:
//Input: prices = [7,1,5,3,6,4]
//Output: 5
//Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
//Example 2:
//Input: prices = [7,6,4,3,1]
//Output: 0
//Explanation: In this case, no transactions are done and the max profit = 0.
 
//Constraints:
//1 <= prices.length <= 105
//0 <= prices[i] <= 104


function maxProfit(prices) {

    const length = prices.length;

    if (length === 0) return 0;
    if (length === 1) return prices[0];

    let buy = prices[0];
    let diff = 0;
    let profit = 0;

    for (i = 0; i < length; i++) {
        if (prices[i] < buy) {
            buy = prices[i];
        }
        diff = prices[i] - buy;
        if (diff > profit) {
            profit = diff;
        }
    }

    if (profit <= 0) {
        console.log("No transactions are done and the max profit is 0")
    } else {
        console.log("Max Profit is: " + profit);
    }

    return profit;

}

maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([7, 6, 4, 3, 1]);