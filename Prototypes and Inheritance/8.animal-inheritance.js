class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} loves to eat`;
    }

    sleep() {
        return `${this.name} enjoys his sleep`;
    }
};

class Dog extends Animal {
    constructor(name, age, hairColor) {
        super(name, age);
        this.hairColor = hairColor;
    }

    bark() {
        return `${this.name} aged:${this.age} with ${this.hairColor} hair is a doggy who loves to bark --- bark bark bark!`;
    }
}

class Cat extends Animal {
    constructor(name, age, breed) {
        super(name, age); 
        this.breed = breed;
    }

    meow() {
        return `The cat ${this.name} aged:${this.age} is a ${this.breed} cat, that loves to meow`;
    }

}

const newDog = new Dog('Rex', 5, 'Black&Brown');
console.log(newDog.bark());

const newCat = new Cat('Tom', 5, 'Persian');
console.log(newCat.meow());