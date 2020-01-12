function solve(array) {
    let number = Number(array.shift());

    let operations = {
        chop: (num) => {
            return (num / 2);
        },
        dice: (num) => {
            return (Math.sqrt(num));
        },
        spice: (num) => {
            return (num + 1);
        },
        bake: (num) => {
            return (num * 3);
        },
        fillet: (num) => {
            let twentyPerc = num * 0.2;
            return (num - twentyPerc);
        }
    }
    for (let i = 0; i < array.length; i++) {
        number = operations[array[i]](number);
        console.log(number);
    }
}
solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);