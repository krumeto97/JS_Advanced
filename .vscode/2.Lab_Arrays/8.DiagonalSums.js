function solve(params) {
    let mainSum = 0,
        secondarySum = 0;
    for (let row = 0; row < params.length; row++) {
        mainSum += params[row][row];
        secondarySum += params[row][params.length - row - 1];
    }
    console.log(mainSum + " " + secondarySum);
}
solve([
    [20, 40],
    [10, 60]
]);