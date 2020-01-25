function solve(data) {
    let arr = data.reduce((a, b) => {
        let [brand, model, cars] = b.split(' | ');
        let str = model + " -> " + cars;
        if (!a[brand]) {
            a[brand] = [];
        }
        a[brand] = [...a[brand], str]; //TODO: da napravq ako ima 
        return a; //povtarqshta se kola da
    }, []); //se adva valueto
    Object.keys(arr).map(x => {
        console.log(x);
        arr[x].map(car => {
            console.log(`###${car}`);
        });
    });
}
solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);