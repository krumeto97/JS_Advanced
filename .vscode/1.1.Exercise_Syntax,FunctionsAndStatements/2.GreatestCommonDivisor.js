function GCD(x, y) {
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}
GCD(3, 9);