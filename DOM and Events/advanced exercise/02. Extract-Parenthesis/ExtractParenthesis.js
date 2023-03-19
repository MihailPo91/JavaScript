function extract(content) {
    const targetString = document.getElementById(content).textContent;
    const regex = /\(([^)]+)\)/g;
    const matches = targetString.match(regex).map(match => match.slice(1, -1));
    return matches.join('; ');
}