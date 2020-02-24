module.exports = function sum(arr, start, end) {
    return arr
        .slice(start, end ? end + 1 : arr.length)
        .reduce((a, b) => {
            return a + b;
        }, 0);
}