function solve(data) {
    function extractMembers(str) {
        return str
            .split("|")
            .filter(x => x !== "")
            .map(x => x.trim())
            .map(x => Number(x) ? Math.round(x * 100) / 100 : x);
    }
    let keys = extractMembers(data[0]);
    let result = data
        .slice(1)
        .map(x => extractMembers(x))
        .map(x => x.reduce((res, val, i) => {
            res[keys[i]] = val;
            return res;
        }, {}));
    return JSON.stringify(result);
}

console.log(solve([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]));
console.log(solve([
    '| Town | Latitude | Longitude |',
    '| Random Town | 0.00 | 0.00 |'
]));
