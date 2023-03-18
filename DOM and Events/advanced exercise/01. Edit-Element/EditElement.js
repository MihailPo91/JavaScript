function editElement(reference, stringElement, replacementString) {
    while (reference.textContent.includes(stringElement)) {
        reference.textContent = reference.textContent.replace(stringElement, replacementString);
    }
}
