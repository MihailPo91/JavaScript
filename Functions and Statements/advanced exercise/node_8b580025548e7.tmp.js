function crystalCutter(array) {
    let target = array[0];
    let crystals = array.slice(1);

    function switchAction(actions, current) {
        console.log(`${actions[0]} x${actions.length}`);
        actions = [];
        console.log('Transporting and washing');
        current = Math.floor(current);
        return current, actions;
    }

    for (let index = 0; index < crystals.length; index++) {
        let current = crystals[index]
        console.log(`Processing chunk ${current} microns`)

        while (current > target) {

            let actions = [];
            if (current === target) {
                console.log(`Finished crystal ${current} microns`)
            }

            while (current / 4 >= target) {
                actions.push('Cut');
                current /= 4;
            }
            current, actions = switchAction(actions, current);



            while (current - (current * 0.20) >= target) {
                actions.push('Lap');
                current -= current * 0.2;
            }
            current, actions = switchAction(actions, current);

            while (current - 20 >= target) {
                actions.push('Grind');
                current -= 20;
            }
            current, actions = switchAction(actions, current);

            while (current - 2 >= target) {
                actions.push('Etch');
                current -= 2;
            }
            current, actions = switchAction(actions, current);
        }
    }
}


crystalCutter([1375, 50000]);