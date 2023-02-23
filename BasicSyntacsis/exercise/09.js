function solve (fruitType, weightInGrams, pricePerKilogram) {
    let weightInKilograms = weightInGrams / 1000;
    let moneyNeeded = weightInKilograms * pricePerKilogram;
    let output = `I need \$${moneyNeeded.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruitType}.`
    console.log(output)
}

solve('apple', 1563, 2.35)
