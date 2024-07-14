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

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width + this.height;
    }

    set area(value) {
        throw new Error('Area is a read-only property');
    }
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // Output: 15
// rect.area = 20; // Error: Area is a read-only property
