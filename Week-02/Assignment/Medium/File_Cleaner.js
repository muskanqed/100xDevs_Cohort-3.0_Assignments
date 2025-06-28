const fs = require("fs");

function readFilePromisfied(filename) {}

function cleanFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) reject(err);

      const cleanedData = data.trim().replace(/\s+/g, " ");
      fs.writeFile(fileName, cleanedData, "utf-8", (err) => {
        if (err) return reject(err);
        resolve(cleanedData);
      });
    });
  });
}

cleanFile("a.txt").then((data) => {
  console.log("Cleaned the file and wrote back: ", data);
});
