const fs = require("fs");

// readFile Promisified
function readFilePromisified(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

// writeFile Promisified
function writeFilePromisified(fileName, data) {
  return new Promise((resolve, reject) => {
    const trimData = typeof data === "string" ? data.trim() : data;
    fs.writeFile(fileName, trimData, "utf-8", (err) => {
      if (err) reject(err);
      else resolve("Data written successfully");
    });
  });
}

// cleanFile Promisified
function cleanFilePromisified(fileName, text) {
  readFilePromisified(fileName)
    .then((data) => {
      if (data) {
        writeFilePromisified(fileName, text)
          .then((message) => {
            console.log(message);
          })
          .catch((err) => {
            console.error("Error writing file:", err);
          });
      } else {
        console.log("No data found");
      }
    })
    .catch((err) => {
      console.error("Error reading file:", err);
    });
}

cleanFilePromisified("a.txt", "   mehak    muskan mehak    ");
