function solve(params) {
    let count = 0;
    for (let row = 0; row < params.length; row++) {
        for (let col = 0; col < params[row].length; col++) {
            let rightNeighbor = params[row][col + 1];
            let currElement = params[row][col];
            if (rightNeighbor !== undefined && rightNeighbor === currElement) {
                count++;
            }

            if (row > 0) {
                let upNeighbor = params[row - 1][col];
                if (upNeighbor !== undefined && upNeighbor === currElement) {
                    count++;
                }
            }
        }
    }
    console.log(count);
}
solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);

// solve([
//     ['test', 'yes', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']
// ]);