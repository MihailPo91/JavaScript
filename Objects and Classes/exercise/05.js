function heroCreator(inputArray) {
    let heroes = [];

    for (const line of inputArray) {
        let tokens = line.split(' / ');
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = [tokens[2]];

        heroes.push({ name, level, items });
    }
    let sortedHeroes = heroes.sort((a, b) => a.level - b.level);

    for (const hero of sortedHeroes) {
        console.log(`Hero: ${hero.name}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items.join(', ')}`)
    }
}


heroCreator([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);