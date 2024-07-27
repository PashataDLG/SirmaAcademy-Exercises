(function() {
    String.prototype.ensureStart = function(str) {
        return this.startsWith(str);
    }

    String.prototype.ensureEnd = function(str) {
        return this.endsWith(str);
    }

    String.prototype.isEmpty = function() {
        return this.length ? false : true;
    }

    String.prototype.capitalize = function() {
        return this.toUpperCase();
    }
    
    String.prototype.truncateWords = function(numWords) {
        let words = this.split(' ');

        if(numWords >= words.length){
            return this;
        }

        let truncated = words.slice(0, numWords).join(' ');
        return truncated;
    }
})();

let string = 'abcdefg';
let str = 'efg';
let emptyStr = '';

console.log(string.ensureStart(str));
console.log(string.ensureEnd(str));
console.log(emptyStr.isEmpty());
console.log(str.capitalize());

let sentence = "This is a long sentence that we want to truncate.";
console.log(sentence.truncateWords(5));