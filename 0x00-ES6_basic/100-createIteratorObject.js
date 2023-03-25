export default function createIteratorObject(report) {
  const arr = [];
  for (const key of Object.keys(report.allEmployees)) {
    arr.push(...report.allEmployees[key]);
  }
  return arr;
}
