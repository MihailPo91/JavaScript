function solve(amount, type, day) {
    let totalPrice = 0;

    if (type.toLowerCase() === 'students') {
        switch (day) {
            case 'Friday': totalPrice += amount * 8.45; break;
            case 'Saturday': totalPrice += amount * 9.80; break;
            case 'Sunday': totalPrice += amount * 10.46; break;
        }
        if (amount >= 30) {
            totalPrice -= totalPrice * 0.15;
        }
    }
    else if (type.toLowerCase() === 'business') {
        if (amount >= 100) {
            amount -= 10;
        }
        switch (day) {
            case 'Friday': totalPrice += amount * 10.90; break;
            case 'Saturday': totalPrice += amount * 15.60; break;
            case 'Sunday': totalPrice += amount * 16; break;
        }
    }
    else if (type.toLowerCase() === 'regular') {
        switch (day) {
            case 'Friday': totalPrice += amount * 15; break;
            case 'Saturday': totalPrice += amount * 20; break;
            case 'Sunday': totalPrice += amount * 22.50; break;
        }
        if (amount >= 10 && amount <= 20) {
            totalPrice -= totalPrice * 0.05
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}


solve(
    40,
    "Regular",
    "Saturday"
)