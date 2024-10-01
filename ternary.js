// app.js

class Person {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        // Use a ternary operator to set the profession
        this.profession = profession ? profession : 'Unemployed';
    }

    getDetails = () => {
        const { name, age, profession } = this; // Destructuring this
        // Use a ternary operator to determine employment status
        const employmentStatus = profession ? profession : 'unemployed';
        return `${name} is ${age} years old and works as a ${employmentStatus}.`;
    };

    changeProfession = (newProfession) => {
        if (newProfession) {
            this.profession = newProfession;
        }
    };

    // Static method to get details of multiple persons using map
    static getAllDetails(persons) {
        return persons.map(person => person.getDetails());
    }
}

// Create instances of the Person class
const person1 = new Person('James', 28, 'Software Developer');
const person2 = new Person('Jasmine', 24, 'Graphic Designer');
const person3 = new Person('Alex', 30, ''); // Alex is unemployed

// Store persons in an array
const personsArray = [person1, person2, person3];

// Use the static method to get details of all persons
const allDetails = Person.getAllDetails(personsArray);

// Log the details of all persons
console.log(allDetails);
