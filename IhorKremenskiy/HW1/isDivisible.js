// Игорь
// Create a function isDivisible. isDivisible(n, x, y) should checks if a number n is divisible by two numbers x AND y.

// Example:
// isDivisible(3,1,3)--> true because 3 is divisible by 1 and 3
// isDivisible(12,2,6)--> true because 12 is divisible by 2 and

function isDivisible(n, x, y) {

    return n % x === 0 && n % y === 0;
}


console.log('Do you think 3 is divisible by 1 and 3? ' + '\n' + '\n' + isDivisible(3, 1, 3))
console.log('What is about 28 is divisible by 7 and 9? ' + '\n' + '\n' + isDivisible(28, 7, 9))

