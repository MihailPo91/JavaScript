function focused() {
    const inputs = Array.from(document.querySelectorAll('input[type="text"]'))
    inputs.forEach((input) => input.addEventListener('focus', addingClass))

    function addingClass() {
        this.parentNode.classList.add('focused');
    }

    inputs.forEach((input) => input.addEventListener('blur', removingClass))

    function removingClass() {
        this.parentNode.classList.remove('focused');
    }
}