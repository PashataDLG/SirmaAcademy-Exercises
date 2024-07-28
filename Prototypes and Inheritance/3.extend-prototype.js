function attachSpecies(Class) {
    Class.prototype.species = 'Human';

    Class.prototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`
    };
};

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

Person.prototype.toString = function() {
    return `Name: ${this.name}, Age: ${this.age}`
};

attachSpecies(Person);

const newPerson = new Person ('Georgi', 'Dimitrov');
console.log(newPerson.toSpeciesString());