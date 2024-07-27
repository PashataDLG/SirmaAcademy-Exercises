class Shape {
    calculateArea() {
        throw new Error('this should be ovverriden in child classes');
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return +.5 * this.base * this.height;
    }
};


class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    calculateArea() {
        return this.side * this.side;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

const baseCircle = new Circle(100);
console.log(baseCircle.calculateArea().toFixed(2));

const baseSquare = new Square(15);
console.log(baseSquare.calculateArea());

const baseTriangle = new Triangle(10, 10);
console.log(baseTriangle.calculateArea());