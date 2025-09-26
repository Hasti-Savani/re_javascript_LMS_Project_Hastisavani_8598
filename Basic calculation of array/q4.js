// 4. String Capitalizer
function capitalizeArray(arr) {
    return arr.map(str => str.toUpperCase());
}

let words = ["hello", "world", "javaScript", "fun"];
console.log(capitalizeArray(words));

