function lockedProfile() {
    const buttons = Array.from(document.getElementsByTagName('button'));



    buttons.forEach((button) => {
        button.addEventListener('click', informationToggler);
    }
    )

    function informationToggler(e) {
        const btn = e.currentTarget;
        const currentProfile = btn.parentElement;
        let children = Array.from(currentProfile.children);
        const hiddenInfo = children[9];

        let unlocked = children[4];

        if (unlocked.checked) {
            if (btn.textContent === 'Show more') {
                hiddenInfo.style.display = 'block';
                btn.textContent = 'Hide it';
            } else {
                hiddenInfo.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }

    }
}
