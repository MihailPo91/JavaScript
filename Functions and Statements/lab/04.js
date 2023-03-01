function priceCalculator(product, amount) {
    totalPrice = 0;
    if (product === 'coffee') {
        totalPrice += 1.5 * amount;
    } else if (product === 'water') {
        totalPrice += 1 * amount;
    } else if (product === 'coke') {
        totalPrice += 1.4 * amount;
    } else if (product === 'snacks') {
        totalPrice += 2 * amount;
    }

    console.log(totalPrice.toFixed(2));
}

priceCalculator('coffee', 2);