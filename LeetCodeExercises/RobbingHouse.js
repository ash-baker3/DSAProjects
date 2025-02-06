

//Example 1:

//Input: nums = [1,2,3,1]
//Output: 4
//Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//Total amount you can rob = 1 + 3 = 4.
//Example 2:

//Input: nums = [2,7,9,3,1]
//Output: 12
//Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//Total amount you can rob = 2 + 9 + 1 = 12.

function robHouses(nums) {
    const length = nums.length;
    if (length === 0) return 0;
    if (length === 1) return nums[0];

    let dp = new Array(length);
    dp[0] = nums[0]; 
    dp[1] = Math.max(nums[0], nums[1]); 
   

    for (let i = 2; i < length; i++) { //i=4
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    console.log("Total amount you can rob: " + dp[length - 1]);
    return dp[length - 1];
}


const nums = [2, 7, 9, 3, 1];
//robHouses(nums); 
rob(nums);

//Time & space - O(n)

//Dynamic programming - space optimized

function rob(nums) {
    let prevRob = 0;
    let maxRob = 0;

    for(const values of nums) {
        const temp = Math.max(maxRob, prevRob + values);
        prevRob = maxRob;
        maxRob = temp;
    };
    console.log("Total amount you can rob is: " + maxRob);
    return maxRob;
}