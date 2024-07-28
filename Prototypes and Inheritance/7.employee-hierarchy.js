class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

class Manager extends Employee {
    constructor(name, salary, extraHours, currency){
        super(name, salary);
        this.extraHours = extraHours;
        this.currency = currency
    }

    calculateBonus() {
        return `The manager received as bonus ${this.extraHours * 10} ${this.currency}`
    }  
};

class Enginneer extends Employee {
    constructor(name, salary, extraParts, currency){
        super(name, salary);
        this.extraParts = extraParts;
        this.currency = currency;
    };

    calculateBonus() {
        const bonus = this.extraParts * 5;
        return `The engineer receives as bonus ${bonus} ${this.currency}`;
    };
}

const newManager = new Manager('Georgi', 1500, 4, 'BGN');
console.log(newManager.calculateBonus());

const newEngineer = new Enginneer('Pesho', 1800, 4, 'GBP');
console.log(newEngineer.calculateBonus());