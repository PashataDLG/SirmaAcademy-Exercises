function Person(name) {
    this.name = name;

    Employee.call(this, name, 'Unknown Job')
}

function Employee(name, job) {
    this.name = name;
    this.job = job;
}


const person = new Person('Alice');
console.log(person);

const emp = new Employee('Alice', 'Engineer');
console.log(emp);
// Desired Output: Employee { name: 'Alice', job: 'Engineer' }
