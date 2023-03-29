// TODO
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const titleInput = document.getElementById('title');

    const loadAllBtn = document.getElementById('load-button');
    const addBtn = document.getElementById('add-button');
    const toDoList = document.getElementById('todo-list');

    loadAllBtn.addEventListener('click', loadAllTasks);
    addBtn.addEventListener('click', createTask);


    function loadAllTasks(event) {
        if (event) {
            event.preventDefault();
        }
        // or can be done with event?.preventDefault() - null safe operator

        toDoList.innerHTML = '';
        fetch(BASE_URL)
            .then((data) => data.json())
            .then((tasksRes) => {
                const tasks = Object.values(tasksRes);

                for (const { name, _id } of tasks) {
                    const li = document.createElement('li');
                    const span = document.createElement('span');
                    const removeBtn = document.createElement('button');
                    const editBtn = document.createElement('button');

                    li.id = _id;
                    span.textContent = name;
                    removeBtn.textContent = 'Remove';
                    editBtn.textContent = 'Edit';

                    editBtn.addEventListener('click', loadEditForm);
                    removeBtn.addEventListener('click', removeTask)

                    li.append(span, removeBtn, editBtn);
                    toDoList.appendChild(li);
                }
            }).catch((error) => {
                console.error(error);
            })



    }

    function loadEditForm(event) {
        const liParent = event.currentTarget.parentNode;
        const [span, _removeBtn, editBtn] = Array.from(liParent.children);
        const editInput = document.createElement('input');
        editInput.value = span.textContent;
        span.remove();
        liParent.prepend(editInput);
        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'Submit';
        submitBtn.addEventListener('click', submitTask);
        editBtn.remove();
        liParent.appendChild(submitBtn);
    }

    function submitTask(event) {
        const liParent = event.currentTarget.parentNode
        const id = liParent.id;
        const input = Array.from(liParent.children)[0];
        const httpHeaders = {
            method: 'PATCH',
            body: JSON.stringify({ name: input.value })
        }
        fetch(BASE_URL + id, httpHeaders)
            .then(() => loadAllTasks())
            .catch((error) => {
                console.error(error);
            })
    }

    function createTask(event) {
        if (event) {
            event.preventDefault();
        }
        const name = titleInput.value;
        if (name === '') {
            alert('Name cannot be empty string!');
            return;
        }

        httpHeaders = {
            method: 'POST',
            body: JSON.stringify({ name })
        }
        fetch(BASE_URL, httpHeaders)
            .then(() => {
                loadAllTasks();
                titleInput.value = '';
            })
            .catch((error) => {
                console.error(error);
            })
    }

    function removeTask(event) {
        if (event) {
            event.preventDefault();
        }

        const id = event.currentTarget.parentNode.id;
        const url = BASE_URL + id;

        httpHeaders = {
            method: 'DELETE',
        }
        fetch(url, httpHeaders)
            .then(() => loadAllTasks())
            .catch((error) => {
                console.error(error);
            })
    }
}
attachEvents();
