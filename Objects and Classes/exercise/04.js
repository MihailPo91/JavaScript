function movieManager(inputArray) {
    let movies = [];

    for (line of inputArray) {
        let command = line.split(' ')[0];
        let name = line.split(' ').slice(1).join(' ');

        if (command === 'addMovie') {
            movies.push({ name })
        } else {
            if (line.includes('directedBy')) {
                let targetIndex = line.split(' ').indexOf('directedBy');
                name = line.split(' ').slice(0, targetIndex).join(' ');
                let director = line.split(' ').slice(targetIndex + 1).join(' ');

                for (let movie of movies) {
                    if (name === movie.name) {
                        movie.director = director;
                    }
                }
            } else if (line.includes('onDate')) {
                let targetIndex = line.split(' ').indexOf('onDate');
                name = line.split(' ').slice(0, targetIndex).join(' ');
                let date = line.split(' ').slice(targetIndex + 1).join('');

                for (let movie of movies) {
                    if (name === movie.name) {
                        movie.date = date;
                    }
                }
            }
        }
    }
    for (const movie of movies) {
        if (movie.hasOwnProperty('name') && movie.hasOwnProperty('director') && movie.hasOwnProperty('date')) {
            console.log(JSON.stringify(movie));
        }
    }
}
movieManager([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);