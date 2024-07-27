(function(){
    Array.prototype.first = function() {
        return this[0];
    };
    
    Array.prototype.skip = function(n) {
        return this.splice(n);
    };
    
    Array.prototype.take = function(n) {
        return this.splice(0, n);
    };
    
    Array.prototype.product = function() {
        return this.reduce((acc, currentValue) => acc + currentValue, 0);
    };
    
    Array.prototype.unique = function() {
        return this.map(number => number * 2);
    };
})();

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [1, 2, 3];

const firstNum = arr.first();
const newArr = arr.skip(3);
const newArr2 = arr.take(3);
const product = arr2.product();
const uniqueArr = arr2.unique();