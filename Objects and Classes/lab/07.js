function meetingPlanner(array) {
    let meetings = {};

    for (const line of array) {
        let [day, name] = line.split(' ');
        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            meetings[day] = name;
        }

    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`)
    }
}


meetingPlanner(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);

console.log("   ")

meetingPlanner(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
)