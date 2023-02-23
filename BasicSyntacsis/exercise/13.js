function solve (array, rotations) {
    for (let rotation = 1; rotation <= rotations ; rotation++) {
        let toRotate = array.shift()
        array.push(toRotate)
    }

    let output = array.join(' ')
    console.log(output)
}


solve([51, 47, 32, 61, 21], 2)