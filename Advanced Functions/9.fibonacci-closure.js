function getFibonacci() {
    let a = 1;
    let b = 1;
    return function() {
        let nextNumber = a;
        a = b;
        b = nextNumber + b;
        return nextNumber;
    }
}

let fibonacci = getFibonacci();
console.log(fibonacci()); // 1
console.log(fibonacci()); // 1
console.log(fibonacci()); // 2
console.log(fibonacci()); // 3
console.log(fibonacci()); // 5
console.log(fibonacci()); // 8
console.log(fibonacci()); // 13
console.log(fibonacci()); // 21
