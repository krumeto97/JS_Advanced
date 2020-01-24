function solve(input) {
    let obj = {};
    input = input
        .join("")
        .match(/\w+/gim)
        .map(x => obj.hasOwnProperty(x) ? obj[x] += 1 : obj[x] = 1);
    console.log(JSON.stringify(obj));
}
//.map(x => obj.hasOwnProperty(x) ? obj[x] += 1 : obj[x] = 0
solve(['Far too slow, you\'re far too slow.']);
