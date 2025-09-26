// 2. Check Even or Odd
function checkEvenOddArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i] + " is Even");
        } else {
            console.log(arr[i] + " is Odd");
        }
    }
}

let numbers = [10, 21, 32, 45, 50];
checkEvenOddArray(numbers);

