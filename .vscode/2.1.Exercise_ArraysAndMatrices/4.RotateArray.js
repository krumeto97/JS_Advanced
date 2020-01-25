function solve(array) {
    let a = parseInt(array.pop());
    let b = array.length - a;
    array = array.concat(array.splice(0, b));
    console.log(array.join(" ").toString());
}
solve([
    '1',
    '2',
    '3',
    '4',
    '2'
]);
solve([
    'Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15'
]);