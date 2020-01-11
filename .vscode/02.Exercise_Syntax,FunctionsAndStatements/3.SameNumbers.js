function same(x) {
    let isTrue = true;
    let b = String(x).split('');
    let firstDigit = b[0];
    b.forEach(element => {
        if (element != firstDigit) {
            isTrue = false;
        }
    });
    let sum = x
        .toString()
        .split('')
        .map(Number)
        .reduce((a, b) => a + b, 0);
    console.log(isTrue);
    console.log(sum);
}
same(2222322);