function solve (string) {
    result = string.split(/(?=[A-Z])/);
    console.log(result.join(', '))
}

solve('HoldTheDoor')