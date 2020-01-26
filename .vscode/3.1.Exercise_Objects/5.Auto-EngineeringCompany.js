function solve(data) {
    let arr = data.reduce((a, b) => {
        let [brand, model, cars] = b.split(' | ');
        if (!a[brand]) {
            a[brand] = [];
            a[brand][model] = Number(cars);
        } else if (a[brand][model]) {
            a[brand][model] += Number(cars);
        } else {
            a[brand][model] = Number(cars);
        }
        return a;
    }, []);
    for (const key of Object.keys(arr)) {
        console.log(key);
        for (const car of Object.keys(arr[key])) {
            console.log(`###${car} -> ${arr[key][car]}`);
        }
    }
}
solve([
    'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200'
]);