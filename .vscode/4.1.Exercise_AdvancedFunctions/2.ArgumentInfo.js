function solve(...params) {
    let obj = {};
    obj = params.reduce((a, b) => {
        let type = typeof b;
        console.log(`${type}: ${b}`);
        if (!a[type]) {
            a[type] = 0;
        }
        a[type] += 1;
        return a;
    }, []);
    let keys = Object.entries(obj).sort((a, b) => {
        return b[1] - a[1];
    });
    keys = keys.map(x => {
        console.log(`${x[0]} = ${x[1]}`);
    });
}
solve('cat', 42, 32, function () {
    console.log('Hello world!');
});