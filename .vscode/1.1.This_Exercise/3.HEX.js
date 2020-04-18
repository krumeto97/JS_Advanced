class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return "0x" + this.value.toString(16).toUpperCase();
    }

    plus(b) {
        let sum = 0;
        if (typeof b === "object") {
            sum += b.valueOf() + this.value;
        } else {
            sum += this.value + b;
        }
        let g = new Hex(sum)
        return g;
    }

    minus(b) {
        let sum = 0;
        if (typeof b === "object") {
            sum += this.value - b.valueOf();
        } else {
            sum += this.value - b;
        }
        let g = new Hex(sum)
        return g;
    }

    parse(b) {
        let numberPart = b.substring(2)
        return parseInt(numberPart, 16);
    }
}
const h = new Hex(5);
const b = new Hex(10);
console.log(h.toString());
console.log(h.valueOf() + 1);
console.log(h.plus(b).toString());
console.log(h.parse("x0FF"));