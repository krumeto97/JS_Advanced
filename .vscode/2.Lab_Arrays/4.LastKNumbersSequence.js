function solve(n, k) {
    const array = [];
    array[0] = 1;
    n--;
    while (n > 0) {
        let sum = 0;
        let start = array.length - k;
        if (start < 0) {
            start = 0;
        }
        for (let i = start; i < array.length; i++) {
            sum += array[i];
        }
        array.push(sum);
        n--;
    }
    console.log(array.join(" ").toString());
}

solve(6, 3)