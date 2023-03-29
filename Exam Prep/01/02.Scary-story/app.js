window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const storyTitleInput = document.getElementById('story-title');
  const genreInput = document.getElementById('genre');
  const storyInput = document.getElementById('story');

  const previewUl = document.getElementById('preview-list');
  const mainDiv = document.getElementById('main');

  const publishButton = document.getElementById('form-btn');
  publishButton.addEventListener('click', moveToPreview);

  function moveToPreview() {
    // Collect the info from all the inputs

    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let age = ageInput.value;
    let storyTitle = storyTitleInput.value;
    let genre = genreInput.value;
    let story = storyInput.value;

    if (firstName === '' || lastName === '' || age === '' || storyTitle === '' || story === '') {
      return;
    }

    // Create HTML elements and populate with info

    let baseLi = document.createElement('li');
    baseLi.classList.add('story-info');
    let article = document.createElement('article');
    let nameHeading = document.createElement('h4');
    nameHeading.textContent = `Name: ${firstName} ${lastName}`;
    let ageP = document.createElement('p');
    ageP.textContent = `Age: ${age}`;
    let titleP = document.createElement('p');
    titleP.textContent = `Title: ${storyTitle}`;
    let genreP = document.createElement('p');
    genreP.textContent = `Genre: ${genre}`;
    let storyP = document.createElement('p');
    storyP.textContent = story;

    saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save Story';
    saveBtn.classList.add('save-btn');
    editBtn = document.createElement('button');
    editBtn.textContent = 'Edit Story';
    editBtn.classList.add('edit-btn');
    deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Story';
    deleteBtn.classList.add('delete-btn');

    saveBtn.disabled = false;
    editBtn.disabled = false;
    deleteBtn.disabled = false;

    // Adding event listeners on the buttons

    saveBtn.addEventListener('click', () => {
      mainDiv.innerHTML = '<h1>Your scary story is saved!</h1>'
    });
    editBtn.addEventListener('click', () => {
      baseLi.remove();
      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      ageInput.value = age;
      storyTitleInput.value = storyTitle;
      genreInput.value = genre;
      storyInput.value = story;
      publishButton.disabled = false;
      saveBtn.disabled = true;
      editBtn.disabled = true;
      deleteBtn.disabled = true;
    });
    deleteBtn.addEventListener('click', () => {
      baseLi.remove();
      publishButton.disabled = false;
    });

    //  DOM manipulations

    article.appendChild(nameHeading);
    article.appendChild(ageP);
    article.appendChild(titleP);
    article.appendChild(genreP);
    article.appendChild(storyP);
    article.appendChild(saveBtn);
    article.appendChild(editBtn);
    article.appendChild(deleteBtn);

    baseLi.appendChild(article);
    previewUl.appendChild(baseLi);

    // Additional functionality and input cleaning
    publishButton.disabled = true;
    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    storyTitleInput.value = '';
    genreInput.value = '';
    storyInput.value = '';
  }
}
