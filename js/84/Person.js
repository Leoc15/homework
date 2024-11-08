class Person {

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    toString() {
        return ` First Name: ${this.firstName} Last Name: ${this.lastName}, Age: ${this.age}`;
    }

}

class Student extends Person {
    constructor(firstName, lastName, age, grade) {
        super(firstName, lastName, age)
        this.grade = grade
    }

    toString() {
        return super.toString() + `, Grade ${'85%'}`;
        // return ` -First Name: ${this.firstName}, Last Name: ${this.lastName}, Age: ${this.age} ,Grade: ${this.grade}`;
    }
}

const Dan = new Person('Danny', 'DeVito', 79);

console.log('hello' + Dan);

const Bob = new Student('Bobby', 'Brixton', 23, '85%');

console.log('hello' + Bob);