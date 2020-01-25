function solve(data) {
    let arr = data.reduce((a, b) => {
        let [juice, quantity] = b.split(' => ');
        if (!a.currentJuiceQuantity[juice]) {
            a.currentJuiceQuantity[juice] = 0;
        }
        a.currentJuiceQuantity[juice] += Number(quantity);
        let bottleQ = Math.floor(a.currentJuiceQuantity[juice] / 1000);
        if (bottleQ > 0) {
            a.completedJuices[juice] = bottleQ;
        }
        return a;
    }, {
        completedJuices: {},
        currentJuiceQuantity: {}
    }).completedJuices
    for (const key in arr) {
        console.log(`${key} => ${arr[key]}`)
    }
}
solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);