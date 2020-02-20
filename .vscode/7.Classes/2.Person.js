class Person {
    constructor(a, b, c, d) {
        this.firstName = a;
        this.lastName = b;
        this.age = Number(c);
        this.email = d;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
};

const person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());