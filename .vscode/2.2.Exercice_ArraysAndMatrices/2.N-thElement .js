function solve(params) {
    let n = parseInt(params.pop());
    for (let i = 0; i < params.length; i += n) {
        console.log(params[i]);
    }
}
solve(['5',
    '20',
    '31',
    '4',
    '20',
    '2'
]);