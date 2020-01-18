function solve(array) {
    function compare(a, b) {
        return a - b;
    }
    array.sort(compare);
    console.log(array[0] + " " + array[1]);
}
solve([30, 15, 50, 5]);