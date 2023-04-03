function solve(inputArray) {
    let groceries = inputArray[0].split('!');

    for (let i = 1; i < inputArray.length; i++) {
        let tokens = inputArray[i].split(' ')
        let command = tokens[0];

        if (command === 'Urgent') {
            let product = tokens[1];

            if (!groceries.includes(product)) {
                groceries.unshift(product);
            }
        } else if (command === 'Unnecessary') {
            let product = tokens[1];

            if (groceries.includes(product)) {
                let index = groceries.indexOf(product);
                if (index > -1) {
                    groceries.splice(index, 1);
                }
            }
        } else if (command === 'Correct') {
            let oldProduct = tokens[1];
            let newProduct = tokens[2];

            if (groceries.includes(oldProduct)) {
                let index = groceries.indexOf(oldProduct);
                if (index > -1) {
                    groceries[index] = newProduct;
                }
            }

        } else if (command === 'Rearrange') {
            let product = tokens[1];

            if (groceries.includes(product)) {
                let index = groceries.indexOf(product);
                if (index > -1) {
                    let cut = groceries.splice(index, 1);
                    groceries.push(cut);
                }
            }
        } else {
            console.log(groceries.join(', '));
        }
    }
}


solve(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);