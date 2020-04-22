function solve(data) {
    const template = {
        width: 0,
        height: 0,
        area: function () {
            return this.width * this.height;
        },
        compareTo: function (obj) {
            return this.area() - obj.area() === 0 ?
                this.width - obj.width :
                this.area() - obj.area();
        }
    }
    let objects = data
        .map(([width, height]) => {
            return Object.assign(Object.create(template), {
                width,
                height
            });
        });

    return objects.sort((a, b) => {
        return b.compareTo(a);
    })
}
console.log(solve([
    [1, 20],
    [20, 1],
    [5, 3],
    [5, 3]
]));