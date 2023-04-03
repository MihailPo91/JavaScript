window.addEventListener('load', solve);

function solve() {
    const genreInput = document.getElementById('genre');
    const nameInput = document.getElementById('name');
    console.log(nameInput)
    const authorInput = document.getElementById('author');
    const dateInput = document.getElementById('date');

    const hitsContainer = document.getElementsByClassName('all-hits-container')[0];
    const savedSongsContainer = document.getElementsByClassName('saved-container')[0];
    const totalLikesParagraph = document.querySelector('.likes > p');
    let totalLikes = Number(totalLikesParagraph.textContent.split(': ')[1]);

    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addSong);

    function addSong(event) {
        event.preventDefault();

        // Validating inputs

        if (genreInput.value === '' || nameInput.value === '' || authorInput.value === '' || dateInput.value === '') {
            alert('You need to fill all inputs.');
            return;
        }

        // Creating main DOM elements

        hitInfoDiv = document.createElement('div');
        hitInfoDiv.classList.add('hits-info');
        img = document.createElement('img');
        img.src = './static/img/img.png';
        headingGenre = document.createElement('h2');
        headingGenre.textContent = `Genre: ${genreInput.value}`;
        console.log(headingGenre)
        headingName = document.createElement('h2');
        headingName.textContent = `Name: ${nameInput.value}`;
        console.log(headingName)
        headingAuthor = document.createElement('h2');
        headingAuthor.textContent = `Author: ${authorInput.value}`;
        console.log(headingAuthor)
        headingDate = document.createElement('h3');
        headingDate.textContent = `Date: ${dateInput.value}`;
        console.log(headingDate)

        // Creating buttons

        saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save song';
        saveBtn.addEventListener('click', saveSong);

        likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.textContent = 'Like song';
        likeBtn.addEventListener('click', likeSong);

        deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteSong);

        // DOM manipulations

        hitInfoDiv.appendChild(img);
        hitInfoDiv.appendChild(headingGenre);
        hitInfoDiv.appendChild(headingName);
        hitInfoDiv.appendChild(headingAuthor);
        hitInfoDiv.appendChild(headingDate);
        hitInfoDiv.appendChild(saveBtn);
        hitInfoDiv.appendChild(likeBtn);
        hitInfoDiv.appendChild(deleteBtn);
        hitsContainer.appendChild(hitInfoDiv);

        // Clearing inputs

        genreInput.value = '';
        nameInput.value = '';
        authorInput.value = '';
        dateInput.value = '';
    }
    function saveSong(event) {
        event.preventDefault();
        let parent = event.currentTarget.parentNode;
        let children = Array.from(parent.children);
        let newDiv = document.createElement('div');
        newDiv.classList.add('hits-info');
        children.forEach(element => {
            if (!(element.textContent === 'Save song' || element.textContent === 'Like song')) {
                newDiv.appendChild(element);
            }
        })
        savedSongsContainer.appendChild(newDiv);
        parent.remove();

    }

    function likeSong(event) {
        event.preventDefault();
        totalLikes++;
        console.log(totalLikes)
        totalLikesParagraph.textContent = `Total Likes: ${totalLikes}`;
        event.currentTarget.disabled = true;
    }

    function deleteSong(event) {
        event.preventDefault();
        let parent = event.currentTarget.parentNode;
        parent.remove();
    }
}