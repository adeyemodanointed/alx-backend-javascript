const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.toString().split('\n');
    const fields = {};
    const students = {};
    let dataLength = 0;

    lines.forEach((line) => {
      if (line) {
        dataLength += 1;
        const field = line.split(',');
        if (Object.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
        if (Object.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    });

    console.log(`Number of students: ${dataLength - 1}`);
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(
          `Number of students in ${key}: ${value}. List: ${students[key].join(
            ', ',
          )}`,
        );
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
