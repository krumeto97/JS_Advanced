function solve(array) {
    let number = 1;
    const arr = [];
    array.forEach(element => {
        if (element === "add") {
            arr.push(number);
            number++;
        } else if (element === "remove") {
            arr.pop();
            number++;
        }
    });
    if (arr.length > 0) {
        console.log(arr.join("\n").toString());
    } else {
        console.log("Empty");
    }
}
solve([
    'add',
    'add',
    'add',
    'add'
]);
solve([
    'add',
    'add',
    'remove',
    'add',
    'add'
]);