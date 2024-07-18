function solve(arg1, arg2, arg3, arg4) {
    return arg1 + arg2 + arg3 + arg4;
}

function partialSum(fixedArg) {
    return function (b, c, d) {
        return solve(fixedArg, b, c, d);
    };
}

const addFive = partialSum(5);
console.log(addFive(1, 2, 3)); // Output: 11


function calculateTax(fixedTax, taxRate) {
    return function applyTax(amount) {
        return amount + (taxRate * amount) + fixedTax;
    }
}

const taxToPay = calculateTax(5, 0,15);
console.log(taxToPay(100));