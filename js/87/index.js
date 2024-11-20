export default class Person {
    constructor(first, last, age) {
        this.first = first;
        this.last = last;
        this.age = age;
    }
    print() {
        console.log(`${this.first} ${this.last} ${this.age}`);
    }
}

const p=new Person('david','ohana',25);
p.print();