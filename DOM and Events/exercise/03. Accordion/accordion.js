function toggle() {
    const toggler = document.getElementsByTagName('span')[0];
    const extra = document.getElementById('extra');

    if (extra.style.display === 'none') {
        extra.style.display = 'block';
        toggler.textContent = 'Less';
    } else {
        extra.style.display = 'none';
        toggler.textContent = 'More';
    }

}
