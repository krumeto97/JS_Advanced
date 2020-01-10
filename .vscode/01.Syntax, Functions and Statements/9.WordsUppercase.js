function solve(str) {
    let result = str.match(/\w+/gim)
        .map(x => x.toUpperCase())
        .join(", ");
    return result;
}
console.log(solve('Hi, how are you?'));