function solve (speed, area) {
    const allowedSpeeds = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };
    let allowed = allowedSpeeds[area];
    let status = '';

    if (speed > allowed) {
        var diff = speed - allowed;

        
        if (diff <= 20) {
            status = 'speeding';
        }
        else if (diff > 20 && diff <= 40) {
            status = 'excessive speeding';
        }
        else {
            status = 'reckless driving';
        }
        
    } else {
        let output = `Driving ${speed} km/h in a ${allowed} zone`;
        console.log(output);
        return;
    }
    let output = `The speed is ${diff} km/h faster than the allowed speed of ${allowed} - ${status}`;
    console.log(output);
}

solve(120, 'interstate')