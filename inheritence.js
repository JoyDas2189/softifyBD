// class Car {
//     constructor(brand) {
//         this.brand = brand;
//     }

//     persent() {
//         return `I have a ${this.brand} car`
//     }
// }

// class Model extends Car {
//     constructor(brand, model) {
//         super(brand);
//         this.model = model;
//     }

//     show() {
//         return `${this.persent()} and Model is ${this.model}.`
//     }
// }

// const myCar = new Model("Toyota", "Supra");

// console.log(myCar.show())

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         return `${this.name} makes noise`;
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }

//     speak() {
//         return `${this.name} barks`
//     }
// }

// const myDog = new Dog("Kiba", "German Shepherd");

// console.log(myDog.speak());

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     get area() {
//         return this.width + this.height;
//     }

//     set area(value) {
//         throw new Error('Area is a read-only property');
//     }
// }

// const rect = new Rectangle(5, 10);
// console.log(rect.area); 


// Static

/* 
class MathHelper {
    static add(a, b){
        return a + b;
    }
}
console.log(MathHelper.add(10, 5));
 */

/* 
class Car {
    constructor (name) {
        this.name = name;
    }

    static hello() {
        return `Hello ${this.name}`
    }
}

const myCar = new Car ("Ford");

console.log(Car.hello())
 */



class Prani {
    constructor(name) {
        this._name = name;
    }

    get info(){
        return this._name

    }
    set info (newName) {
        this._name = newName;
    }
}

const dog = new Prani("Dog");

console.log(dog._name);

class Car {
    constructor (make, model, year) {
        this._make = make;
        this._model = model;
        this._year = year;
    }

    start() {
        return `${this._make}, ${this._model}, ${this._year} has started`;
    }
    stop() {
        return `${this._make}, ${this._model}, ${this._year} has stopped`;
    }
    get make() {
        return this._make;
    }
    set make(newMake) {
        this._make = newMake;
    }
    get model() {
        return this._model;
    }
    set model(newModel) {
        this._model = newModel;
    }
    get year() {
        return this._year;
    }
    set year(newYear) {
        this._year = newYear;
    }
}

const car1 = new Car ("Toyota", "Supra", "1999");

console.log(car1.start());
console.log(car1.stop());

car1.make = "Ford";
console.log(car1.make);

car1.model = "Mustang";
console.log(car1.model);

car1._year = "2000";
console.log(car1._year);



