function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook';
    const phoneBook = document.getElementById('phonebook');

    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');

    const loadBtn = document.getElementById('btnLoad');
    loadBtn.addEventListener('click', loadAllNumbers);

    async function loadAllNumbers() {
        const allNumbersRes = await fetch(BASE_URL);
        const allNumbersData = await allNumbersRes.json();

        phoneBook.innerHTML = '';

        for (const number in allNumbersData) {
            let li = document.createElement('li');
            li.textContent = `${allNumbersData[number].person}: ${allNumbersData[number].phone}`;
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.id = allNumbersData[number]['_id'];
            deleteBtn.addEventListener('click', deleteNumber)
            li.appendChild(deleteBtn);
            phoneBook.appendChild(li);
        }

    }

    const createBtn = document.getElementById('btnCreate');
    createBtn.addEventListener('click', addNewNumber);

    async function addNewNumber() {
        const personValue = personInput.value;
        const phoneValue = phoneInput.value;

        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'person': personValue,
                    'phone': phoneValue,
                })
            });
            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.error(error);
        }
        loadAllNumbers();
        personInput.value = '';
        phoneInput.value = '';
    }

    async function deleteNumber() {
        const id = this._id;
        try {
            const deleteResponse = await fetch(BASE_URL + `/${id}`, { method: 'DELETE' });
            const data = deleteResponse.json();
            console.log(data);
            loadAllNumbers();
        } catch (err) {
            console.error(err);
        }

    }

}

attachEvents();