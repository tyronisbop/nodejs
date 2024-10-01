// Person.js

class Person {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession || 'Unemployed';
    }

    getDetails = () => {
        const { name, age, profession } = this; // Destructuring this
        return `${name} is ${age} years old and works as a ${profession}.`;
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

// Export the Person class
module.exports = Person;
