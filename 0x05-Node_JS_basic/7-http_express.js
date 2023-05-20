const express = require('express');
const { readFile } = require('fs');

const app = express();

function countStudents(path) {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(path, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
        lines.forEach((line) => {
          if (line) {
            length += 1;
            const field = line.toString().split(',');
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

        let output = '';
        output += `Number of students: ${length - 1}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. List: ${students[
              key
            ].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString())
    .then((response) => {
      res.send(`This is the list of our students\n${response}`);
    })
    .catch(() => {
      res.send('This is the list of our students\nCannot load the database');
    });
});
app.listen(1245);

module.exports = app;
