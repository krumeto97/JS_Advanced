function solve([speed, type]) {
    let roadMap = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };
    let num = parseInt(speed);
    let difference = num - roadMap[type];
    if (difference <= 20 && difference > 0) {
        console.log("speeding");
    } else if (difference <= 40 & difference > 0) {
        console.log("excessive speeding");
    } else if (difference > 40) {
        console.log("reckless driving");
    }
}
solve([21, 'residential'])