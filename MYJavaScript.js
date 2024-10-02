// Function to calculate factorial
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    if (n === 0 || n === 1) {
        return 1; // Base case: 0! = 1 and 1! = 1
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i; // Multiply result by each number from 2 to n
    }
    return result;
}

// Read input from the console
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a non-negative integer: ', (input) => {
    const number = parseInt(input);
    const result = factorial(number);
    console.log(`The factorial of ${number} is: ${result}`);
    readline.close();
});
