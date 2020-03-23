function solve(a) {
    console.log(Math.round((a + Number.EPSILON) * 100) / 100);
}

solve(13, 495);