// 4. String Capitalizer
function capitalizeWords(str) {
    return str
        .split(" ")
        .map(word => word.toUpperCase())
        .join(" ");
}

console.log(capitalizeWords("hello world"));
