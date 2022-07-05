// Path docs: https://nodejs.org/api/path.html
// Read docs: https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
// Write docs:https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options

const path = require("path");
const fs = require("fs");

console.log("start - Read Files");
// Create paths to files - use path module

const res1 = path.join(__dirname, "/responses/response1/response1.txt");
const res2 = path.join(__dirname, "/responses/response2.txt");

// Read files - use readFileSync method with above paths

const readRes1 = fs.readFileSync(res1, { encoding: "utf8" });
const readRes2 = fs.readFileSync(res2, { encoding: "utf8" });

console.log(readRes1);
console.log(readRes2);

// Write concatenation of results  to file ./responses/result.txt with method writeFileSync

const pathResult = path.join(__dirname, "/responses/result.txt");
// const concatenationRes1AndRes2 = readRes1 + " " + readRes2;
// console.log(concatenationRes1AndRes2);

fs.writeFileSync(pathResult, `Result1: ${readRes1} \r\n`);
fs.appendFileSync(pathResult, `Result2: ${readRes2}`);

// result.txt should contain below text:
// Result1: This is first response,
// Result2: This is second response

console.log("done - Read & Write Files");
console.log("starting the next one");

// Look how console logs are displayed - in which order
