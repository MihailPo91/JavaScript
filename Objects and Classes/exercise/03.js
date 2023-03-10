function storeStock(listOne, listTwo) {
    let store = {};

    for (let i = 0; i < listOne.length; i++) {
        if (i % 2 === 0) {
            store[listOne[i]] = Number(listOne[i + 1]);
        }
    }

    for (let i = 0; i < listTwo.length; i++) {
        if (i % 2 === 0) {
            if (store.hasOwnProperty(listTwo[i])) {
                store[listTwo[i]] += Number(listTwo[i + 1]);
            } else {
                store[listTwo[i]] = Number(listTwo[i + 1]);
            }
        }
    }

    for (const key in store) {
        console.log(`${key} -> ${store[key]}`)
    }
}


storeStock([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);

console.log(` `)

storeStock([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
);