const mockedData = {
  name: 'Andrey',
  grades: [
    { name: 'Algebra', score: 2 },
    { name: 'Physics', score: 6 },
    { name: 'Invalid Grade', score: null },
    { name: 'Chemistry', score: undefined }, { name: 'History', score: 9 }]
}

const averageGrade = (person) => {
  const totalGradesSum = person.grades.reduce((acc, subject) => {
    if (!subject.score) {
      return acc;
    }

    return acc + subject.score;
  }, 0)

  const subjectsCount = person.grades.length;

  return (totalGradesSum / subjectsCount).toFixed(2);
}

console.log(averageGrade(mockedData)); // expected 3.80
