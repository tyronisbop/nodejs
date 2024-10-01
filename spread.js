// app.js

class Person {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession || 'Unemployed';
    }

    getDetails = () => {
        const { name, age, profession } = this; // Destructuring this
        const employmentStatus = profession ? profession : 'unemployed';
        return `${name} is ${age} years old and works as a ${employmentStatus}.`;
    };

    changeProfession = (newProfession) => {
        if (newProfession) {
            this.profession = newProfession;
        }
    };

    // Method to clone a Person object using the spread operator
    clone = () => {
        return { ...this }; // Using spread operator to clone the object
    };

    // Static method to get details of multiple persons using map
    static getAllDetails(persons) {
        return persons.map(person => person.getDetails());
    }

    // Static method to combine details of multiple persons
    static combinePersons(persons) {
        return persons.map(person => ({ ...person })); // Using spread operator to create a new object for each person
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
console.log(allDetails);

// Clone a person using the clone method
const clonedPerson = person1.clone();
console.log('Cloned Person:', clonedPerson);

// Combine persons using the combinePersons method
const combinedPersons = Person.combinePersons(personsArray);
console.log('Combined Persons:', combinedPersons);
