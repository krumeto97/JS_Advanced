function solve(data) {
    let parseData = [...data.map(x => {
        return JSON.parse(x);
    })];
    let sortArr = parseData.map(x => {
        return x.map(Number).sort((a, b) => {
            return b - a;
        });
    });
    let obj = [];
    for (const iterator of sortArr) {
        let sum = iterator.reduce((a, b) => a + b, 0);
        if (!obj.hasOwnProperty(sum)) {
            obj[sum] = iterator;
        }
    }
    obj = obj.sort((a, b) => {
        return a.length - b.length;
    });
    for (const iterator of Object.values(obj)) {
        console.log(`[${iterator.join(', ')}]`);
    }
}
solve([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]);