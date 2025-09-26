// 1. 1. Simple Addition Function
function addArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let numbers = [5, 10, 15, 20];
console.log("The sum is: " + addArray(numbers));
