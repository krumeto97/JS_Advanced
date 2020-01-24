function solve(input) {
    let obj = {};
    input = input
        .map(x => x.split(' <-> '))
        .map(x => obj.hasOwnProperty(x[0]) ? obj[x[0]] += Number(x[1]) : obj[x[0]] = Number(x[1]));
    for (const key in obj) {
        console.log(`${key} : ${obj[key]}`)
    }
}
solve([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
])