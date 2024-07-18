const double = (num) => num * 2;

const square = (num) => Math.pow(num, 2);

function compose (func1, func2) {
        return function(number) {
            let num = func1(number);
            num = func2(num);
            return num;
        }
}

const doubleThenSquare = compose(double, square);

console.log(doubleThenSquare(3));
