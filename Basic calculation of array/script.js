let numbers = [10, 20, 30, 40, 50];

// Sum 
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log("Sum:", sum);

// Average
let average = sum / numbers.length;
console.log("Average:", average);

// Maximum 
let max = Math.max(...numbers);
console.log("Max:", max);

// Minimum 
let min = Math.min(...numbers);
console.log("Min:", min);

// Multiplication 
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log("Product:", product);
