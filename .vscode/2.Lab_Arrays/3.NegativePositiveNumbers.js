function solve(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            const element = array[i];
            array.splice(i, 1);
            array.unshift(element);
        }
    }
    console.log(array);
}
solve([7, -2, 8, 9])