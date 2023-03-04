function crystalCutter(array) {
    let target = array[0];
    let crystals = array.slice(1);
    
    function switchAction(actions, current) {
        console.log(`${actions[0]} x${actions.length}`);
        console.log('Transporting and washing');
        current = Math.floor(current);
        return current;
    }

    for (let index = 0; index < crystals.length; index++) {
        let current = crystals[index]
        console.log(`Processing chunk ${current} microns`)
        let actions = [];

        while (current !== target) {

            if (current === target) {
                console.log(`Finished crystal ${current} microns`)
                break;
            }

            while (current / 4 >= target) {
                actions.push('Cut');
                current /= 4;
            }
            current = switchAction(actions, current);
            actions = [];
            if (current === target) {
                console.log(`Finished crystal ${current} microns`);
                break;
            }



            while (current - (current * 0.20) >= target) {
                actions.push('Lap');
                current -= current * 0.2;
            }
            current = switchAction(actions, current);
            actions = [];
            if (current === target) {
                console.log(`Finished crystal ${current} microns`);
                break;
            }

            while (current - 20 >= target) {
                actions.push('Grind');
                current -= 20;
            }
            current = switchAction(actions, current);
            actions = [];
            if (current === target) {
                console.log(`Finished crystal ${current} microns`);
                break;
            }

            while (current - 2 >= target - 1) {
                actions.push('Etch');
                current -= 2;
            }
            current = switchAction(actions, current);
            actions = [];
            if (current === target) {
                console.log(`Finished crystal ${current} microns`);
                break;  
            }
            
            if (target - current === 1) {
                console.log('X-ray x1')
                current += 1;
                console.log(`Finished crystal ${current} microns`)
            }
        }

        
    }
        
}


crystalCutter([1000, 4000, 8100]);