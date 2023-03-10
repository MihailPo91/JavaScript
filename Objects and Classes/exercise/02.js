function townsPrinter(array) {
    let towns = [];

    for (let line of array) {
        let [town, latitude, longitude] = line.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        towns.push({ town, latitude, longitude });
    }
    for (const town of towns) {
        console.log(town);
    }
}


townsPrinter(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);