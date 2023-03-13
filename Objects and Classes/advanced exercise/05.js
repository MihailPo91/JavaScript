function studentSorter(inputArray) {
    let students = [];

    for (const line of inputArray) {
        let info = line.split(', ');
        let [name, grade, averageScore] = info.map(info => info.split(': ')[1]);
        grade = Number(grade);
        averageScore = Number(averageScore);

        if (averageScore >= 3) {
            students.push({ name, grade, averageScore });
        }

    }
    let grades = {};

    for (const student of students) {
        let currentGrade = student.grade + 1;
        if (!grades.hasOwnProperty(currentGrade)) {
            grades[currentGrade] = { students: [student.name,], scores: [student.averageScore,] };
        } else {
            grades[currentGrade].students.push(student.name);
            grades[currentGrade].scores.push(student.averageScore)
        }
    }

    for (const key in grades) {
        let studentString = grades[key].students.join(', ')
        const sum = grades[key].scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        averageScore = sum / grades[key].scores.length;

        console.log(`${key} Grade\nList of students: ${studentString}\nAverage annual score from last year: ${averageScore.toFixed(2)}`);
        console.log('');
    }
}


studentSorter([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]
);


studentSorter([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
]
);