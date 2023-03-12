function airportFlights(list) {
    const allFlights = list[0];
    const changedStatuses = list[1];
    const checkStatus = list[2][0];
    const flights = {};

    for (const item of allFlights) {
        const [flight, destination] = item.split(' ');
        flights[flight] = {
            Destination: destination,
            Status: '',
        };
    }

    for (const item of changedStatuses) {
        const [flight, status] = item.split(' ');
        if (flights[flight]) {
            flights[flight].Status = status;
        }
    }

    for (const [flight, info] of Object.entries(flights)) {
        if (checkStatus === 'Ready to fly') {
            if (info.Status === '' || info.Status === 'Ready to fly') {
                info.Status = 'Ready to fly';
                console.log({ Destination: info.Destination, Status: 'Ready to fly' });
            }
        } else if (info.Status !== '' && info.Status !== 'Ready to fly' && info.Status === checkStatus) {
            console.log({ Destination: info.Destination, Status: checkStatus });
        }
    }
}






airportFlights([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
]
);