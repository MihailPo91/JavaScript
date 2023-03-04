function carWash(actionsArray) {
    let cleanValue = 0;

    for (const action of actionsArray) {
        if (action === 'soap') {
            cleanValue += 10;
        }
        else if (action === 'water') {
            cleanValue += (cleanValue * 0.2);
        }
        else if (action === 'vacuum cleaner') {
            cleanValue += (cleanValue * 0.25);
        }
        else if (action === 'mud') {
            cleanValue -= (cleanValue * 0.1);
        }
    }

    console.log(`The car is ${cleanValue.toFixed(2)}% clean.`)
}


carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);