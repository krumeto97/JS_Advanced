function solve(params) {
    return JSON.parse(params)
        .reduce((a, b) => {
            Object.assign(a, b);
            return a;
        }, {});
}
console.log(solve(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`));
console.log(solve(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`));