class Person {
    constructor(first, last) {
        this._firstName = first;
        this._lastName = last;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(x) {
        return this._firstName = x;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(x) {
        return this._lastName = x;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(a) {
        const [x, y] = a.split(" ");
        if (y !== undefined) {
            this.firstName = x;
            this.lastName = y;
        }
    }
}


let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName) //Nikola
console.log(person.lastName) //Tesla
let person1 = new Person("Albert", "Simpson");
console.log(person1.fullName); //Albert Simpson
person1.firstName = "Simon";
console.log(person1.fullName); //Simon Simpson
person1.fullName = "Peter";
console.log(person1.firstName) // Simon
console.log(person1.lastName) // Simpson