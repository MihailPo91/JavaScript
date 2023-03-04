function dnaHelix(length) {
    const sequence = 'ATCGTTAGGG';
    let index = 0;

    for (let i = 0; i < length; i++) {
        let row = '';
        if (i % 4 === 0) {
            row = `**${sequence[index % sequence.length]}${sequence[(index + 1) % sequence.length]}**`;
        } else if (i % 4 === 1 || i % 4 === 3) {
            row = `*${sequence[index % sequence.length]}--${sequence[(index + 1) % sequence.length]}*`;
        } else if (i % 4 === 2) {
            row = `${sequence[index % sequence.length]}----${sequence[(index + 1) % sequence.length]}`;
        }

        console.log(row);
        index += 2;
    }
}

dnaHelix(10)