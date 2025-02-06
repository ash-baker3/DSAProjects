// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


function ClimbStairs(n) {

    if(n <= 3)  {
        console.log("There are " + n + " ways to climb to top");
        return n;
    }

    let prev1 = 3;
    let prev2 = 2;
    let current = 0;

    for(i = 3; i < n; i++) {
        current = prev1 + prev2; 
        prev2 = prev1; 
        prev1 = current; 

    }

    console.log("There are " + current + " ways to climb to top");
    return current;
}

ClimbStairs(4);