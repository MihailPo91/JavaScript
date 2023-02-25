function login (info) {
    const username = info[0];
    const targetPassword = Array.from(username).reverse().join("");
    for (let index = 1; index < info.length; index++) {
        
        if (info[index] === targetPassword) {
            console.log(`User ${username} logged in.`);
            return;
        }

        if (index === 4) {
            console.log(`User ${username} blocked!`);
            return;
        }

        console.log('Incorrect password. Try again.');
    }
}


login(['Acer','login','go','let me in','recA']);