class Name {
    constructor (name) {
        this.name = name;
    }
}

class Rectangle extends Name {
    constructor (name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }

    getArea() {
        return `Area is ${this.width * this.height}`;
    }

    getPerimeter() {
        return `Perimeter is ${2 * (this.width + this.height)}`;
    }
}

class Circle extends Name {
    constructor (name, radius) {
        super(name);
        this.radius = radius;
    }

    getArea() {
        let areaformat = (Math.PI * this.radius * this.radius).toFixed(2);
        return `Ares is ${areaformat}`;
    }

    getPerimeter() {
        let perimeterFormat = (2 * Math.PI * this.radius).toFixed(2);
        return `Perimeter is ${perimeterFormat}`;
    }
}

const rectangle = new Rectangle ("Rectangle", 10, 5);
const circle = new Circle("Circle", 7);

console.log(`${rectangle.name}, Area is ${rectangle.getArea()} and Perimeter is ${rectangle.getPerimeter()}`);
console.log(`${circle.name}, Area is ${circle.getArea()} and Perimeter is ${circle.getPerimeter()}`);