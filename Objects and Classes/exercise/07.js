function oddOccurence(inputString) {
    let occurences = {};
    inputString = inputString.toLowerCase();
    let wordsArray = inputString.split(' ');

    for (let item of wordsArray) {
        if (!occurences.hasOwnProperty(item)) {
            occurences[item] = 1;
        } else {
            occurences[item]++;
        }
    }

    let outputArray = [];

    for (const key in occurences) {
        if (occurences[key] % 2 !== 0) {
            outputArray.push(key);
        }
    }

    console.log(outputArray.join(' '));
}

oddOccurence('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurence('Cake IS SWEET is Soft CAKE sweet Food');