class Employee {
    constructor(name, age, salary, tasks) {
        if(new.target === Employee) {
            throw new Error('Cannot create instance of an abstract class');
        }
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.tasks = tasks;
    }

    work() {
        throw new Error("Abstract method 'work' not implemented");
    }

    getSalary() {
        throw new Error("Abstract method 'getSalary' not implemented");
    }
};


class Junior extends Employee {
    constructor(name, age, salary, tasks) {
        super(name, age, salary, tasks);
    }

    work() {
        return `The junior employee ${this.name} does his tasks: ${this.tasks}`;
    }

    getSalary() {
        return `${this.name} who is ${this.age} years old receive ${this.salary} BGN as monthly salary`;
    }
};


class Senior extends Employee {
    constructor(name, age, salary, tasks) {
        super(name, age, salary, tasks);
    }

    work() {
        return `The senior employee ${this.name} does his tasks: ${this.tasks}`;
    }

    getSalary() {
        return `${this.name} who is ${this.age} years old and he is Senior employee receives ${this.salary} BGN as monthly salary`;
    }
};


class Manager extends Employee {
    constructor(name, age, salary, tasks) {
        super(name, age, salary, tasks);
    }

    work() {
        return `The Manager ${this.name} does his tasks: ${this.tasks}`;
    }

    getSalary() {
        return `${this.name} who is ${this.age} years old, and he is a manager receives ${this.salary} BGN as monthly salary`;
    }
};

const juniorEmployee = new Junior('George', '22', '1200', 'Code, ask for help, listens to managers');
console.log(juniorEmployee.work());
console.log(juniorEmployee.getSalary());

const seniorEmployee = new Senior('Peter', '29', '2500', 'Complicated work, speaks with juniors, helps everybody');
console.log(seniorEmployee.work());
console.log(seniorEmployee.getSalary());

const managerEmployee = new Manager('Steven', '34', '3200', 'Manages team, speaks with higher management, does the schedule');
console.log(managerEmployee.work());
console.log(managerEmployee.getSalary());