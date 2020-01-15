function solve(array) {
    let x = 0;
    let y = 0;
    let x1 = array.shift();
    let y1 = array.shift();
    let x2 = array.shift();
    let y2 = array.shift();
    calc(x1, y1, x, y);
    calc(x2, y2, x, y);
    calc(x1, y1, x2, y2);

    function calc(x1, y1, x2, y2) {
        let a = x1 - x2;
        let b = y1 - y2;
        let result = Math.sqrt((a ** 2) + (b ** 2));
        if (Number.isInteger(result)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
        } else {

            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
        }
    }
}
solve([2, 1, 1, 1])