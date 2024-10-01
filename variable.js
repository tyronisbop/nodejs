class Person {
    constructor(name, age, profession) {
        // Using const for properties that won't change
        const defaultProfession = 'Unemployed';

        // Using let for properties that might change
        this.name = name;
        this.age = age;

        // Profession might be reassigned later, so let's conditionally use let
        this.profession = profession || defaultProfession;
    }

    // Arrow function method using const for the return value
    getDetails = () => {
        const details = `${this.name} is ${this.age} years old and works as a ${this.profession}.`;
        return details;
    };

    // Arrow function method using var inside a block scope (though let or const is better)
    changeProfession = (newProfession) => {
        if (newProfession) {
            var previousProfession = this.profession;  // var is function-scoped and can be redeclared
            this.profession = newProfession;
            console.log(`Changed profession from ${previousProfession} to ${newProfession}`);
        }
    };
}

// Using const for instance creation
const person1 = new Person('James', 28, 'Software Developer');
const person2 = new Person('Jasmine', 24);

// Log the details using let for temporary variables
let person1Details = person1.getDetails();
let person2Details = person2.getDetails();

console.log(person1Details);
console.log(person2Details);

// Change profession of person1
person1.changeProfession('Fintech Specialist');

// Log the updated details
console.log(person1.getDetails());
