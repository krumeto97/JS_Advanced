function price(str, grams, pricePerKilo) {
    let pric = ((grams / 1000) * pricePerKilo).toFixed(2);
    console.log(`I need $${pric} to buy ${(grams/1000).toFixed(2)} kilograms ${str}.`);
}
price('orange', 2500, 1.80);