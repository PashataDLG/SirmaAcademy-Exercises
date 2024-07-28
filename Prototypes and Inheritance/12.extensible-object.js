class Cloner {
    extend(template) {
        for (const key in template) {
            if (template.hasOwnProperty(key)) {
                if(typeof template[key] === 'function') {
                    Cloner.prototype[key] = template[key];
                } else {
                    this[key] = template[key];
                }
            }
        }
    }
}

const student = {
    name: 'George',
    age: 25,
    greet() {
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
    },

    incrementAge() {
        this.age++;
    },
}

const cloner = new Cloner();

cloner.extend(student);

console.log(cloner.name);
console.log(cloner.age);

cloner.greet();
cloner.incrementAge();
console.log(cloner.age);

console.log(Cloner.prototype.greet === cloner.greet);
console.log(Cloner.prototype.incrementAge === cloner.incrementAge);