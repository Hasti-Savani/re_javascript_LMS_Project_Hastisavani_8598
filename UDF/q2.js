// 2. check even or odd
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return number + " is Even";
    } else {
        return number + " is Odd";
    }
}

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));
