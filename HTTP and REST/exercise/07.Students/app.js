function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';

  const tableBody = document.getElementsByTagName('tbody')[0];

  function listStudents() {
    tableBody.innerHTML = '';

    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        data = Object.values(data);
        for (const student of data) {
          console.log(student);
          let tr = document.createElement('tr');
          let tdFirstName = document.createElement('td');
          tdFirstName.textContent = student.firstName;
          let tdLastName = document.createElement('td');
          tdLastName.textContent = student.lastName;
          let tdFacultyNum = document.createElement('td');
          tdFacultyNum.textContent = student.facultyNumber;
          let tdGrade = document.createElement('td');
          tdGrade.textContent = student.grade;
          tr.appendChild(tdFirstName);
          tr.appendChild(tdLastName);
          tr.appendChild(tdFacultyNum);
          tr.appendChild(tdGrade);
          tableBody.appendChild(tr);
        }
      }).catch((err) => {
        console.error(err);
      });
  }
  listStudents();

  const firstNameInput = document.querySelector('.inputs input[name="firstName"]');
  const lastNameInput = document.querySelector('.inputs input[name="lastName"]');
  const facultyNumInput = document.querySelector('.inputs input[name="facultyNumber"]');
  const gradeInput = document.querySelector('.inputs input[name="grade"]');

  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', addNewStudent);

  function addNewStudent() {
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const facultyNumber = facultyNumInput.value;
    const grade = gradeInput.value;

    // TODO: Possibly need to implement error when those are empty!

    httpHeaders = {
      method: 'POST',
      body: JSON.stringify({
        'firstName': firstName,
        'lastName': lastName,
        'facultyNumber': facultyNumber,
        'grade': grade
      })
    }
    fetch(BASE_URL, httpHeaders)
      .then((res) => res.json())
      .then(() => {
        listStudents();
      })
      .catch((err) => {
        console.error(err);
      })

    firstNameInput.value = '';
    lastNameInput.value = '';
    facultyNumInput.value = '';
    gradeInput.value = '';
  }


}

attachEvents();