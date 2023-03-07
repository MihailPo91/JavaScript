function songBlabla(array) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let amount = array[0];
    let selector = array[array.length - 1];

    for (let i = 1; i < array.length - 1; i++) {
        let [typeList, name, time] = array[i].split('_');
        songs.push(new Song(typeList, name, time));
    }

    if (selector === 'all') {
        for (const song of songs) {
            console.log(song.name);
        }
    } else {
        for (const song of songs) {
            if (song.typeList === selector) {
                console.log(song.name);
            }
        }
    }
}

songBlabla([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);