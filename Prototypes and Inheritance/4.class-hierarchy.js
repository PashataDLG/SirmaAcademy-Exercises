function createClasses() {
    class Figure {
        constructor(units) {
            this.units = units
        }

        get area() {
            throw new Error('this should be ovverriden in child classes');
        }

        changeUnits(newUnits) {
            const validUnites = ['cm', 'm', 'mm'];
            if (!validUnites.includes(newUnits)) {
                throw new Error('Invalid unit');
            }
            this.units = newUnits;
        }

        toString() {
            return `Figure units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `Circle - area: ${this.area.toFixed(2)}${this.units}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `Rectangle - area: ${this.area.toFixed(2)}${this.units}`;
        }
    }

    return { Circle, Rectangle };
}

const { Circle, Rectangle } = createClasses();

const baseCircle = new Circle(100, 'cm');
console.log(baseCircle.toString());

const baseRectangle = new Rectangle(50, 50, 'cm');
console.log(baseRectangle.toString());