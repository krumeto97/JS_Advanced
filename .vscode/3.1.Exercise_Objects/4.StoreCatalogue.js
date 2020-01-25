function solve(data) {
    let arr = data.reduce((a, b) => {
        let [product, price] = b.split(' : ');
        if (!a[product[0]]) {
            a[product[0]] = [];
        }
        a[product[0]] = [...a[product[0]], b];
        return a;
    }, []);

    Object.keys(arr).sort().map(x => {
        console.log(x);
        arr[x].sort().map(product => {
            console.log(`  ${product.split(' : ').join(': ')}`);
        });
    });
}
solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);