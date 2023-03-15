function colorize() {
    const evens = Array.from(document.querySelectorAll('tr:nth-child(even)'));
    // for (const item of evens) {
    //     item.style.background = 'teal';
    // }
    evens.forEach((item) => item.style.background = 'teal');
}