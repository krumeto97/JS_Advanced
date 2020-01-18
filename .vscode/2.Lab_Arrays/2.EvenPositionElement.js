function solve(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            arr.push(array[i]);
        }
    }
    console.log(arr.join(" ").toString());
}
solve(['5', '10']);