function solution() {
    let microelements = {
        protein: Number(0),
        carbohydrate: 0,
        fat: 0,
        flavours: 0
    }

    function restock(prod, quan) {
        console.log("Success");
        microelements[prod] += Number(quan);
    }

    function prepare(rec, quan) {

    }
    return function solve(params) {
        const arr = params.split(" ");
        if (arr[0] === "restock") {
            return restock(arr[1], arr[2])
        } else if (arr[0] === "prepare") {
            return
        }
    }
}
let manager = solution();
manager('restock carbohydrate 10');