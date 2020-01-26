function solve(data) {
    let parseData = [...data.map(x => {
        return JSON.parse(x);
    })];
    let sortArr = parseData.map(x => {
        return x.map(Number).sort((a, b) => {
            return b - a;
        });
    });
    sortArr = sortArr.reduce((a, b, i) => {

        return a;
    }, [])
    console.log(sortArr);
}
solve([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]);