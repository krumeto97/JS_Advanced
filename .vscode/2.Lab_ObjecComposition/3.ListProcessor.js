function solve(data) {
    const actions = {
        add: (arr, x) => {
            return [...arr, x]
        },
        remove: (arr, word) => {
            return arr = arr.filter(i => i !== word);
        },
        print: (x, _) => {
            console.log(x);
            return x;
        }
    }

    data.reduce((a, b) => {
        let [command, params] = b.match(/\w{1,}/g)
        a = actions[command](a, params);
        return a;
    }, [])
}

// function solve(data) {
//     function removeItem(arr, word) {
//         arr = arr.filter(i => i !== word);
//         return arr;
//     }
//     data.reduce((a, b) => {
//         if (b.includes("add")) {
//             a.push(b.substring(4));
//         } else if (b.includes("remove")) {
//             let word = b.substring(7);
//             a = removeItem(a, word);
//         } else {
//             console.log(a);
//         }
//         return a;
//     }, [])
// }

console.log(solve([
    'add hello',
    'add again',
    'remove hello',
    'add again', 'print'
]));