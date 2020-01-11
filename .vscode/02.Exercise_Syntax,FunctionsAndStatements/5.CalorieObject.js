function solve(array) {
    let obj = {};
    for (let i = 0; i < array.length; i += 2) {
        let element = array[i];
        let value = parseInt(array[i + 1]);
        obj[element] = value;
    }
    console.log(obj);
}
let test0 = ['Yoghurt', 48, 'Rise', 138, 'Apple', 52];
let test1 = ['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42];
solve(test0);