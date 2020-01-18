function solve(array) {
    let numArr = array.map(Number);
    console.log(numArr[0] + numArr[numArr.length - 1]);
}
solve(['5', '10'])