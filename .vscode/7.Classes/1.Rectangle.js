class Rectangle {
    constructor(a, b, c) {
        this.width = a;
        this.height = b;
        this.color = c;
    }

    calcArea() {
        return this.height * this.width;
    }
}
const rect = new Rectangle(4, 5, "blue");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());