export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((student) => student.location === city);
  return cityStudents.map((student) => {
    const grade = newGrades.find((grade) => grade.studentId === student.id);
    const newStudent = student;
    newStudent.grade = grade ? grade.grade : 'N/A';
    return newStudent;
  });
}
