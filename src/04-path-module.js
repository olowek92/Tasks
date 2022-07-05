// Display in console folder separator
// Build path using join method to response1.txt
// Extract file name from path
// Build absolute path to response2.txt

const path = require("path");
const { resolve } = require("path");

// 1)
console.log(path.sep);

// 2)
const filePath = path.join(__dirname, "/responses/response1/response1.txt");

console.log(filePath);

// 3)
const fileName = path.basename(filePath, ".txt");

console.log(fileName);

// 4)

const pathBeforeAbsolute = path.join(__dirname, "/response/response2.txt");

resolve(pathBeforeAbsolute);
console.log(resolve(pathBeforeAbsolute));
console.log(path.isAbsolute(resolve(pathBeforeAbsolute)));
