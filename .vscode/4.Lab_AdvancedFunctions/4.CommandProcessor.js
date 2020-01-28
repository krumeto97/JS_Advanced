// function solution() {
//     var text = '';

//     function append(str) {
//         text += str;
//     }

//     function removeStart(n) {
//         text = text.substring(n);
//     }

//     function removeEnd(n) {
//         if (text.length >= n) {
//             text = text.substring(0, text.length - n);
//         }
//     }

//     function print() {
//         console.log(text);
//     }

//     return {
//         append,
//         removeStart,
//         removeEnd,
//         print
//     };
// };
function solution() {
    let str = '';
    return {
        append: (s) => str += s,
        removeStart: (n) => str = str.substring(n),
        removeEnd: (n) => str = str.substring(0, str.length - n),
        print: () => console.log(str)
    }
}
