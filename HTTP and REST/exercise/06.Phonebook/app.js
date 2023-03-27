function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook';
    const phoneBook = document.getElementById('phonebook');

    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');

    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');

    loadBtn.addEventListener('click', loadAllNumbers);
    createBtn.addEventListener('click', addNewNumber);

    async function loadAllNumbers() {
        try {
            const allNumbersRes = await fetch(BASE_URL);
            let allNumbersData = await allNumbersRes.json();
            allNumbersData = Object.values(allNumbersData);
            phoneBook.innerHTML = '';

            for (const { phone, person, _id } of allNumbersData) {
                let li = document.createElement('li');
                let deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.id = _id;
                deleteBtn.addEventListener('click', deleteNumber);
                li.innerHTML = `${person}: ${phone}`;
                li.appendChild(deleteBtn);
                phoneBook.appendChild(li);
            }
        } catch (err) {
            console.error(err);
        }
    }

    function addNewNumber() {
        const person = personInput.value;
        const phone = phoneInput.value;
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({ person, phone })
        }

        fetch(BASE_URL, httpHeaders)
            .then((res) => res.json())
            .then(() => {
                loadAllNumbers();
                personInput.value = '';
                phoneInput.value = '';
            })
            .catch((err) => {
                console.error(err);
            })
    }

    function deleteNumber() {
        const id = this.id;
        const httpHeaders = {
            method: 'DELETE'
        };

        fetch(`${BASE_URL}/${id}`, httpHeaders)
        .then((res) => res.json())
        .then(loadAllNumbers)
        .catch((err) => {
            console.error(err)
        })
    }
}

attachEvents();