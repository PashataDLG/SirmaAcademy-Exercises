function multiply(a, b) {
    return a * b;
}
const bindMultiply = multiply.bind(null, 2);

console.log(bindMultiply(3));