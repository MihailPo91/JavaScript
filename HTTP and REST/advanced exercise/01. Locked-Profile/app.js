function lockedProfile() {
    const BASE_URL = 'http://localhost:3030/jsonstore/advanced/profiles/';
    const mainContainer = document.getElementById('main');
    mainContainer.innerHTML = '';

    fetch(BASE_URL)
        .then((res) => res.json())
        .then((data) => {
            data = Object.values(data);
            let counter = 0;

            for (const { _id, username, email, age } of data) {
                counter++;

                // Creating profile container div and attaching class to it
                const profileDiv = document.createElement('div');
                profileDiv.classList.add('profile');

                // Creating profile pic and attaching class to it
                const img = document.createElement('img');
                img.src = './iconProfile2.png';
                img.classList.add('userIcon')

                // Creating select radio inputs and labels for lock and unlock profile

                // Lock label + input
                const labelLock = document.createElement('label');
                labelLock.textContent = 'lock';
                const inputRadioLock = document.createElement('input');
                inputRadioLock.type = 'radio';
                inputRadioLock.name = `user${counter}Locked`;
                inputRadioLock.value = 'lock';
                inputRadioLock.checked = true;

                // Unlock label + input
                const labelUnlock = document.createElement('label');
                labelUnlock.textContent = 'unlock';
                const inputRadioUnlock = document.createElement('input');
                inputRadioUnlock.type = 'radio';
                inputRadioUnlock.name = `user${counter}Locked`;
                inputRadioUnlock.value = 'unlock';
                inputRadioUnlock.checked = false;

                // Spacing
                const br = document.createElement('br');
                const hr = document.createElement('hr');

                // Username label and input
                const labelUsername = document.createElement('label');
                labelUsername.textContent = 'Username';
                const inputUsername = document.createElement('input');
                inputUsername.type = 'text';
                inputUsername.name = `user${counter}Username`;
                inputUsername.value = username;
                inputUsername.disabled = true;
                inputUsername.readOnly = true;

                // Creating the hidden details container and subtags
                const hiddenDetailsDiv = document.createElement('div');
                hiddenDetailsDiv.id = `user${counter}HiddenFields`;
                hiddenDetailsDiv.style.display = 'none';

                // Spacing
                const hr2 = document.createElement('hr');

                // Email label + input
                const labelEmail = document.createElement('label');
                labelEmail.textContent = 'Email:';
                const inputEmail = document.createElement('input');
                inputEmail.type = 'email';
                inputEmail.name = `user${counter}Email`;
                inputEmail.value = email;
                inputEmail.disabled = true;
                inputEmail.readOnly = true;

                // Age label + input
                const labelAge = document.createElement('label');
                labelAge.textContent = 'Age:';
                const inputAge = document.createElement('input');
                inputAge.type = 'email';
                inputAge.name = `user${counter}Age`;
                inputAge.value = age;
                inputAge.disabled = true;
                inputAge.readOnly = true;

                // Creating Show more button
                const showMoreBtn = document.createElement('button');
                showMoreBtn.textContent = 'Show more';


                // DOM Manipulations

                profileDiv.appendChild(img);
                profileDiv.appendChild(labelLock);
                profileDiv.appendChild(inputRadioLock);
                profileDiv.appendChild(labelUnlock);
                profileDiv.appendChild(inputRadioUnlock);
                profileDiv.appendChild(br);
                profileDiv.appendChild(hr);
                profileDiv.appendChild(labelUsername);
                profileDiv.appendChild(inputUsername);

                hiddenDetailsDiv.appendChild(hr2);
                hiddenDetailsDiv.appendChild(labelEmail);
                hiddenDetailsDiv.appendChild(inputEmail);
                hiddenDetailsDiv.appendChild(labelAge);
                hiddenDetailsDiv.appendChild(inputAge);
                profileDiv.appendChild(hiddenDetailsDiv);

                profileDiv.appendChild(showMoreBtn);

                // Add click event listener to the "Show more" button
                showMoreBtn.addEventListener('click', () => {
                    // Check whether the corresponding "unlock" radio button is selected
                    const isUnlocked = inputRadioUnlock.checked;
                    if (isUnlocked) {
                        hiddenDetailsDiv.style.display = 'block';
                        // Create and append the "Hide it" button
                        const hideItButton = document.createElement('button');
                        hideItButton.textContent = 'Hide it';
                        hideItButton.addEventListener('click', () => {
                            // Check whether the corresponding "unlock" radio button is still selected
                            const isUnlocked = inputRadioUnlock.checked;
                            if (isUnlocked) {
                                hiddenDetailsDiv.style.display = 'none';
                                profileDiv.appendChild(showMoreBtn);
                                hideItButton.remove();
                            }
                        })
                        profileDiv.appendChild(hideItButton);
                        showMoreBtn.remove();
                    }
                });

                mainContainer.appendChild(profileDiv);
            }

        }).catch()

}