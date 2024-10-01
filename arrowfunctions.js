class Person {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }

    // Using arrow function for the getDetails method
    getDetails = () => `${this.name} is ${this.age} years old and works as a ${this.profession}.`;

    // Using arrow function for the changeProfession method
    changeProfession = (newProfession) => {
        this.profession = newProfession;
    };
}

// Create instances of the Person class
const person1 = new Person('James', 28, 'Software Developer');
const person2 = new Person('Jasmine', 24, 'Graphic Designer');

// Log the details of each person
console.log(person1.getDetails());
console.log(person2.getDetails());

// Change profession of person1
person1.changeProfession('Fintech Specialist');

// Log the updated details of person1
console.log(person1.getDetails());
