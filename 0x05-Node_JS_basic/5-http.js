const http = require("http");
const fileReader = require("./3-read_file_async");

const port = 1245;
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  if (req.url === "/") {
    res.end("Hello Holberton School!");
  } else if (req.url === "/students") {
    fileReader(process.argv[2]).then(response => {
      res.end(`This is the list of our students
      ${response}`);
    })
  }
});

app.listen(port, "localhost");

module.exports = app;
