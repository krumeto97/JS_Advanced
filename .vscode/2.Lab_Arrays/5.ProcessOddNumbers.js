function solve(array) {
    let oddArr = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 1) {
            oddArr.push(array[i]);
        }
    }
    oddArr = oddArr.map(x => x * 2).reverse();
    console.log(oddArr.join(" ").toString());
}
solve([10, 15, 20, 25]);