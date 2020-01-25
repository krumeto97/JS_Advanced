function solve(params) {
    let delimeter = params.pop()
    console.log(params.join(delimeter).toString())
}
solve(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'
]);