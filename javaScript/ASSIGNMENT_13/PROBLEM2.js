
let students = [
  { name: "John", marks: "92" },
  { name: "Oliver", marks: "85" },
  { name: "Michael", marks: "79" },
  { name: "Dwight", marks: "95" },
  { name: "Oscar", marks: "64" },
  { name: "Kevin", marks: "48" },
];

// Calculate grades based on marks
function calculateGrade(marks) {
  if (marks > 90) {
    return 'A';
  } else if (marks > 80) {
    return 'B';
  } else if (marks > 70) {
    return 'C';
  } else if (marks > 60) {
    return 'D';
  } else if (marks > 50) {
    return 'E';
  } else {
    return 'F';
  }
}

// Map the grades for each student
let gradeMap = students.map(student => {
  return {
    name: student.name,
    grade: calculateGrade(parseInt(student.marks))
  };
});

// Group students according to grades
let groupedStudents = {};
gradeMap.forEach(student => {
  if (!groupedStudents[student.grade]) {
    groupedStudents[student.grade] = [];
  }
  groupedStudents[student.grade].push(student);
});

// Display the grouped students
console.log(groupedStudents);
