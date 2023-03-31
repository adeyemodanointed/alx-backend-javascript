export default function getListStudentIds(arr) {
  try {
    return arr.map((student) => student.id);
  } catch (error) {
    return [];
  }
}
