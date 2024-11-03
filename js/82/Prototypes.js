'use strict'
const Moving = {
    go(speed) {
        this.speed=speed;
        console.log(`Vroooom now Driving ${speed} MPH`)
    },
    print() {
        console.log(`the ${this.color} ${this.make} is going ${this.speed} MPH`)
    }
}

function Vehicle(color, make) {
    this.color = color;
    this.type = type;
}

Object.assign(Vehicle.prototype, Moving);


function Plane(color, make, type) {
    Vehicle.call(this, color, make);
    this.type = type;
}
Plane.prototype = Object.create(Vehicle.prototype);

Plane.prototype.go = function (speed) {
    this.speed=speed;
    console.log(`the ${this.color} ${this.make} ${this.type} is FLYING ${speed} MPH`)
};
const car = new Vehicle('black', 'BMW');
console.log(car);
car.go(50);
car.print();
const plane1 = new Plane('white', 'Cessna',);
plane1.go(285);
plane1.print();