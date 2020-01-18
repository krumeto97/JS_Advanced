function solve(params) {
    let maxRow = params.map(function (row) {
        return Math.max.apply(null, row);
    });
    let max = Math.max.apply(null, maxRow);
    console.log(max);
}
solve([
    [20, 50, 10],
    [8, 33, 145]
])