// Path docs: https://nodejs.org/api/path.html
// Read docs: https://nodejs.org/api/fs.html#fsreadfilepath-options-callback
// Write docs:https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback
// Wykonaj takie same operacje na plikach jak w poprzednim zadaniu z FileSystem - Sync z tą różnicą, że użyj funkcji
// asynchronicznych do odczytu i zapisu plików, tj readFile i writeFile
// ### Do the same as it its in previous snippet but use async methods ###

const path = require("path");
const fs = require("fs");

console.log("start - Read Files");
// Create paths to files - use path module

const res1 = path.join(__dirname, "/responses/response1/response1.txt");
const res2 = path.join(__dirname, "/responses/response2.txt");

// Read files - use readFile method with above paths

const readFromFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, { encoding: "utf8" }, (err, data) => {
      if (err) {
        reject(err);
        console.log(err);
      } else {
        resolve(data);
      }
    });
  });
};

const promises = [readFromFile(res1), readFromFile(res2)];

Promise.all(promises).then((result) => {
  let storeRes1 = result[0];
  let storeRes2 = result[1];
  const pathResult = path.join(__dirname, "/responses/result-async.txt");

  // Write concatenation of results  to file ./responses/result-async.txt with method writeFile

  fs.writeFile(pathResult, `Result1: ${storeRes1} \r\n`, (err) => {
    if (err) throw err;
    console.log("1-Everything is ok.");
  });

  fs.appendFile(pathResult, `Result2: ${storeRes2}`, (err) => {
    if (err) throw err;
    console.log("2-Everything is ok");
  });
});

// result.txt should contain below text:
// Result1: This is first response,
// Result2: This is second response

console.log("done - Read & Write Files");
console.log("starting the next one");

// Look how console logs are displayed - in which order
