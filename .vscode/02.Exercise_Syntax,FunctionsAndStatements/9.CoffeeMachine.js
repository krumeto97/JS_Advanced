function solve(array) {
  const typesOfCoffee = {
    caffeine: 0.8,
    decaf: 0.9
  };
  let totalMoneySpent = 0;
  for (const iterator of array) {
    let price = 0;
    let splitArray = iterator.split(", ");
    let coins = Number(splitArray[0]);
    let typeOfDrink = splitArray[1];
    if (typeOfDrink == "coffee") {
      price += typesOfCoffee[splitArray[2]];
    } else {
      price += 0.8;
    }
    if (splitArray.includes("milk")) {
      milkPrice = Number((price * 0.1).toFixed(1));
      price += milkPrice;
    }
    let sugar = Number(splitArray[splitArray.length - 1]);
    if (sugar > 0) {
      price += 0.1;
    }
    if (coins >= price) {
      totalMoneySpent += price;
      console.log(
        `You ordered ${typeOfDrink}. Price: $${price.toFixed(2)} Change: $${(
          coins - price
        ).toFixed(2)}`
      );
    } else {
      console.log(
        `Not enough money for ${typeOfDrink}. Need $${(price - coins).toFixed(
          2
        )} more`
      );
    }
  }
  console.log(`Income Report: $${totalMoneySpent.toFixed(2)}`);
}
let test0 = [
  "1.00, coffee, caffeine, milk, 4",
  "0.40, tea, milk, 2",
  "1.00, coffee, decaf, 0"
];
let test1 = ["8.00, coffee, decaf, 4", "1.00, tea, 2"];
solve(test0);
