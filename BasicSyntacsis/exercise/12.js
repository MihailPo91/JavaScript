function solve (number, ...operations) {
    const operationsArray = [...operations];
    for (let operation of operationsArray) {
        if (operation === 'chop') {
            number /= 2;
        } else if (operation === 'dice'){
            number = Math.sqrt(number);
        } else if (operation === 'spice'){
            number += 1;
        } else if (operation === 'bake'){
            number *= 3;
        } else if (operation === 'fillet'){
            number -= number * 0.2;
        }
        console.log(number);
    }
    
}



solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')