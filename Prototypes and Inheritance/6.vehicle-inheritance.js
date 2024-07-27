class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
};

class Car extends Vehicle {
    constructor(make, model, hasAC) {
        super(make, model);
        this.hasAC = hasAC
    }
}

class Bike extends Vehicle {
    constructor(make, model, type) {
        super(make, model);
        this.type = type;
    }
}

const newCar = new Car('Steel', 'Sports', true);
console.log(newCar);

const newBike = new Bike('Metal', 'New', 'Mountain');
console.log(newBike);