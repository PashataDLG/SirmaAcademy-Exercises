class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
}

class Student extends Person {
    constructor(name, age, school){
        super(name, age);
        this.school = school
    }
}

const newStudent = new Student('Boris', 17, 'Hristo Botev');
console.log(newStudent);