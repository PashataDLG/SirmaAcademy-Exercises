class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.fullName = firstName + ' ' + lastName
    }

    setFullName(fullName) {
        try {
            const splitName = fullName.split(' ');

            if (splitName.length !== 2) {
                throw new Error('Inavlid format! Full name must contact only one space!!');
            }

            const [firstName, lastName] = splitName;

            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + ' ' + this.lastName;
        } catch (error) {
            console.error(error.message);
        }
    }

    setFirstName(firstName) {
        this.firstName = firstName;
        this.fullName = this.firstName + ' ' + this.lastName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
        this.fullName = this.firstName + ' ' + lastName;
    }
}

const student = new Person('Jack', 'Petrov');

console.log(student); // firstName: 'Jack', lastName: 'Petrov', fullName: 'Jack Petrov'

student.setFirstName('Georgi');
console.log(student); // firstName: 'Georgi', lastName: 'Petrov', fullName: 'Georgi Petrov'

student.setLastName('Ivanov');
console.log(student); // firstName: 'Georgi', lastName: 'Ivanov', fullName: 'Georgi Ivanov'

student.setFullName('Petar Petrov');
console.log(student); // firstName: 'Petar', lastName: 'Petrov', fullName: 'Petar Petrov'

// ALTERNATIVE WITH FUNCTION CONSTRUCTOR AND ADDING METHODS TRHOUGH PROTOTYPE

function Person2(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + ' ' + lastName;
};

Person2.prototype.setFirstName = function (firstName) {
    this.firstName = firstName;
    this.fullName = firstName + ' ' + this.lastName;
};

Person2.prototype.setLastName = function (lastName) {
    this.lastName = lastName;
    this.fullName = this.firstName + ' ' + lastName;
};

Person2.prototype.setFullName = function (fullName) {
    try {
        const splitFullName = fullName.split(' ');

        if (splitFullName.length !== 2) {
            throw new Error('Invalid format. Full name must containt exaclty one space!!!');
        }

        const [firstName, lastName] = splitFullName;

        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + ' ' + this.lastName;
    } catch (error) {
        console.error(error.message);
    }
};


const newPerson = new Person2('Georgi', 'Dimitrov');
console.log(newPerson);
newPerson.setFirstName('Petar');
console.log(newPerson);
newPerson.setLastName('Georgiev');
console.log(newPerson);
newPerson.setFullName('AngelAngelov');
console.log(newPerson);