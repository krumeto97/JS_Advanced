function solve(input) {
    let map = new Map();

    for (let line of input) {
        let tokens = line.split(" | ");
        let town = tokens[0];
        let product = tokens[1];
        let price = Number(tokens[2]);
        if (!map.has(product)) {
            map.set(product, new Map());
        }
        map.get(product).set(town, price);
    }
    for (const [product, town] of map) {
        let lowestPrice = Number.POSITIVE_INFINITY;
        let lowestPriceTown = "";
        for (const [twn, price] of town) {
            if (price < lowestPrice) {
                lowestPrice = price;
                lowestPriceTown = twn;
            }
        }
        console.log(`${product} -> ${lowestPrice} (${lowestPriceTown})`);
    }
}
solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);