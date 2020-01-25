function solve(params) {
    let maxRow = params
        .map(function (row) {
            return row.reduce((a, b) => a + Number(b));
        });
    let isTrue = false;
    for (let i = 0; i < maxRow.length - 1; i++) {
        if (maxRow[i] === maxRow[i + 1]) {
            isTrue = true;
        }
        else {
            isTrue = false;
            break;
        }
    }
    return isTrue;
}
console.log(solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));