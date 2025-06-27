const fs = require("fs");

// Promisified version of setTimeout

function setTimeoutPromisified(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

setTimeoutPromisified(3000).then((callback) => {
  console.log("Promisified version of setTimeout");
});

// Promisified version of fetch
function fetchPromisified(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

fetchPromisified("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// Promisified version of fs.readFile

function readFilePromisified(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFilePromisified("a.txt").then((data) => {
  console.log(data);
});
