function createPrivateCounter(){
    let count = 0;

    const object = {
        getCount: function() {
            return count;
        },

        increment: function() {
            count++;
        }
    }

    return object;
}


const counter = createPrivateCounter();
counter.increment();
console.log(counter.getCount());