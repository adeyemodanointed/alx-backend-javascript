export default function getStudentsByLocation(studentsList, city) {
  try {
    return studentsList.filter((student) => student.location === city);
  } catch (error) {
    return [];
  }
}
