function solve(array) {
    const arr = array.sort((firstName, secondName) => firstName.length - secondName.length
        || firstName.localeCompare(secondName));
    console.log(arr.join("\n"));
}
solve([
    'Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
]);