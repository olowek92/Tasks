// Path docs: https://nodejs.org/api/path.html
// Read docs: https://nodejs.org/api/fs.html#fsreadfilepath-options-callback
// Write docs:https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback
// Wykonaj takie same operacje na plikach jak w poprzednim zadaniu z FileSystem - Sync z tą różnicą, że użyj funkcji
// asynchronicznych do odczytu i zapisu plików, tj readFile i writeFile
// ### Do the same as it its in previous snippet but use async methods ###

console.log('start - Read Files')
// Create paths to files - use path module

// Read files - use readFile method with above paths

// Write concatenation of results  to file ./responses/result-async.txt with method writeFile

// result.txt should contain below text:
// Result1: This is first response,
// Result2: This is second response



console.log('done - Read & Write Files')
console.log('starting the next one')

// Look how console logs are displayed - in which order