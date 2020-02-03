const solution = (function () {

    return {
        add: (a, b) => {
            return [a[0] + b[0], a[1] + b[1]];
        },

        multiply: (a, b) => {
            return [a[0] * b, a[1] * b];
        },
        length: (a) => {
            return Math.sqrt(a[0] ** 2 + a[1] ** 2)
        },
        dot: (a, b) => {
            return a[0] * a[1] + b[0] * b[1];
        },
        cross: (a, b) => {
            return a[0] * b[1] - b[0] * a[1];
        }
    }
})();
console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));