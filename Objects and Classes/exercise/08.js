function parkingLot(input) {
    const parkedCars = new Set();

    input.forEach(str => {
        const [direction, carNumber] = str.split(", ");

        if (direction === "IN") {
            parkedCars.add(carNumber);
        } else if (direction === "OUT") {
            parkedCars.delete(carNumber);
        }
    });

    if (parkedCars.size === 0) {
        console.log('Car Lot is Empty')
    } else {
        console.log([...parkedCars].sort().join('\n'));
    }
}

parkingLot(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);
console.log(' ')

parkingLot(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);