export default function getStudentIdsSum(students) {
  return (students.reduce((a, b) => ({ id: a.id + b.id }))).id;
}
