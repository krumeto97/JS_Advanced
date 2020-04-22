function solve(params) {
    let obj = {};

    function name(obj, prop) {
        Object.assign(obj, {
            prop
        })
    }

}
console.log(solve(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`));