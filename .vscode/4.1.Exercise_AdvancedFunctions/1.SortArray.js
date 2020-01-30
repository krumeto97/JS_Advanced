// function solve(data, order) {
//     return data.sort((a, b) => {
//         if (order === 'asc') {
//             return a - b;
//         }
//         return b - a;
//     });
// }
function solve(data, order) {
    const sorter = filter();
    return sorter[order](data);
    function filter() {
        return {
            asc: (s) => s.sort((a, b) => a - b),
            desc: (s) => s.sort((a, b) => b - a)
        }
    }
}
console.log(solve([14, 7, 17, 6, 8], 'asc'));