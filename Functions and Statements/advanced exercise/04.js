function crystalCuts(array) {
    let target = array[0];
    let crystals = array.slice(1);

    for (let crystal of crystals) {
        let currentAction = 'Cut';
        let counter = 0;
        console.log(`Processing chunk ${crystal} microns`)

        while (true) {
            
            if (crystal === target) {
                console.log(`${currentAction} x${counter}`)
                if (currentAction !== 'X-ray') {
                    console.log('Transporting and washing');
                }
                console.log(`Finished crystal ${crystal} microns`);
                    break;
            }

            if ((crystal / 4) >= target) {
                if (currentAction !== 'Cut') {
                    console.log('Transporting and washing');
                    crystal = Math.floor(crystal);
                    currentAction = 'Cut';
                    counter = 1;
                    crystal /= 4;
                } else {
                    counter++;
                    crystal /= 4;
                }

            }
            else if ((crystal - (crystal * 0.2)) >= target) {
                if (currentAction !== 'Lap') {
                    console.log(`${currentAction} x${counter}`)
                    console.log('Transporting and washing');
                    crystal = Math.floor(crystal);
                    currentAction = 'Lap';
                    counter = 1;
                    crystal -= crystal * 0.2;
                } else {
                    counter++;
                    crystal -= crystal * 0.2;
                }
            }
            else if ((crystal - 20) >= target) {
                if (currentAction !== 'Grind') {
                    console.log(`${currentAction} x${counter}`)
                    console.log('Transporting and washing');
                    crystal = Math.floor(crystal);
                    currentAction = 'Grind';
                    counter = 1;
                    crystal -= 20;
                } else {
                    counter++;
                    crystal -= 20;
                }
            }
            else if ((crystal - 2) >= target) {
                if (currentAction !== 'Etch') {
                    console.log(`${currentAction} x${counter}`)
                    console.log('Transporting and washing');
                    crystal = Math.floor(crystal);
                    currentAction = 'Etch';
                    counter = 1;
                    crystal -= 2;
                } else {
                    counter++;
                    crystal -= 2;
                }
            }
            else {
                if (crystal > target) {
                    counter++;
                    crystal -= 2;
                } else if (target > crystal) {
                    console.log(`${currentAction} x${counter}`);
                    console.log('Transporting and washing');
                    crystal = Math.floor(crystal);
                    counter = 1;
                    currentAction = 'X-ray';
                    crystal += 1;
                }
            }
        }
    }
}


crystalCuts([1, 50000]);