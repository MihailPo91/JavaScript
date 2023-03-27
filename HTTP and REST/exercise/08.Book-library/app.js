function attachEvents() {
  const loadAllBooksBtn = document.getElementById('loadBooks');
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/books';

  const titleInput = document.querySelector('input[name="title"]');
  const authorInput = document.querySelector('input[name="author"]');

  const tableBody = document.getElementsByTagName('tbody')[0];
  const submitBtn = document.querySelector('#form button');

  loadAllBooksBtn.addEventListener('click', loadAllBooks);
  submitBtn.addEventListener('click', createNewBook);


  function loadAllBooks() {
    tableBody.innerHTML = '';
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        for (const book in data) {
          let title = data[book].title;
          let author = data[book].author;

          let tr = document.createElement('tr');
          let tdTitle = document.createElement('td');
          tdTitle.textContent = title;
          let tdAuthor = document.createElement('td');
          tdAuthor.textContent = author;
          tr.appendChild(tdTitle);
          tr.appendChild(tdAuthor);

          let tdButtons = document.createElement('td');
          let editBtn = document.createElement('button');
          editBtn.textContent = 'Edit';
          editBtn.id = book;
          let deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Delete';
          deleteBtn.id = book;

          editBtn.addEventListener('click', editBook);
          deleteBtn.addEventListener('click', deleteBook);

          tdButtons.appendChild(editBtn);
          tdButtons.appendChild(deleteBtn);

          tr.appendChild(tdButtons);
          tableBody.appendChild(tr);
        }
      }).catch((err) => {
        console.error(err);
      })
  }

  function createNewBook() {
    let author = authorInput.value;
    let title = titleInput.value;

    if (author === '' || title === '') {
      alert('Please fill in all the required fields');
      return;
    }

    httpHeaders = {
      method: 'POST',
      body: JSON.stringify({ author, title }),
    };
    fetch(BASE_URL, httpHeaders)
      .then((res) => res.json)
      .then(() => {
        loadAllBooks();
        titleInput.value = '';
        authorInput.value = '';
      }).catch((err) => {
        console.error(err);
      })

  }

  function editBook() {
    let currentAuthor = '';
    let currentTitle = '';
    const id = this.id;

    document.querySelector('#form h3').textContent = 'Edit FORM';
    submitBtn.textContent = 'Save';

    fetch(`${BASE_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        currentAuthor = data.author;
        currentTitle = data.title;
        authorInput.value = currentAuthor;
        titleInput.value = currentTitle;
      }).catch((err) => console.error(err))

    submitBtn.removeEventListener('click', createNewBook);
    submitBtn.addEventListener('click', saveBook);

    function saveBook() {
      let author = authorInput.value;
      let title = titleInput.value;

      if (author === '' || title === '') {
        alert('Please fill in all the required fields');
        return;
      }

      let httpHeaders = {
        method: 'PUT',
        body: JSON.stringify({
          title, author
        })
      }
      fetch(`${BASE_URL}/${id}`, httpHeaders)
        .then((res) => res.json())
        .then(loadAllBooks)
        .catch((err) => {
          console.error(err)
        })
      submitBtn.removeEventListener('click', saveBook);
      submitBtn.addEventListener('click', createNewBook);
      authorInput.value = '';
      titleInput.value = '';
      document.querySelector('#form h3').textContent = 'FORM';
      submitBtn.textContent = 'Submit';
    }

  }

  function deleteBook() {
    const id = this.id;
    console.log(id)
    const httpHeaders = {
      method: 'DELETE'
    };

    fetch(`${BASE_URL}/${id}`, httpHeaders)
      .then((res) => res.json())
      .then(loadAllBooks)
      .catch((err) => {
        console.error(err)
      })
  }
}


attachEvents();