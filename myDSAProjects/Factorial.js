// Two functions that finds the factorial of any number. One using recursive, the other using a for loop

function findFactorialRecursive(number) {
    //Base case
    if(number === 2) {
        return 2;
    }//Recursive case
    return number * findFactorialRecursive(number - 1);
  }

  console.log("Factorial is : " + findFactorialRecursive(5));
  
  function findFactorialIterative(number) {
    let fact = 1;
    for(let i = number; i > 0; i--) {
        fact *= i;
    }
    console.log("Factorial is : " + fact);
    return fact;
  }
  

  findFactorialIterative(5);
  findFactorialIterative(2);
 