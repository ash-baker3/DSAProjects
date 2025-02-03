//Optimizing fibonacci using Memoization

let calculations = 0;
function fibonacciMaster() {
    let cache = {};
    return function fib(n) {
        calculations++;
        if(n in cache) {
            return cache[n];
        } else {
            if(n < 2) {
                return n;
            } else {
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }
        }
    }
}

//Bottom-up approach without recursion.
function FibonacciMaster2(n) {
    let answer = [0,1];
    for(i = 2; i <= n; i++) {
        answer.push(answer[i-2] + answer[i-1]);
    }
    return answer.pop();
}

const fasterFib = fibonacciMaster();
console.log("DP", fasterFib(8));
console.log(FibonacciMaster2(8));

console.log('No of Calculations: ' + calculations);