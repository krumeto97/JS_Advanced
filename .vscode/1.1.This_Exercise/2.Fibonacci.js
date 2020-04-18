function getFibonator() {
    let counter = 0;

    function fib(n) {
        if (n <= 1) {
            return 1;
        }
        return fib(n - 2) + fib(n - 1);
    }

    return function (a) {
        let sum = fib(counter);
        counter++
        return sum;
    }
};
// 1 1 2 3 5 8 13
let f = getFibonator();
console.log(f());
console.log(f());
console.log(f());
console.log(f());