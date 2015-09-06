// Require the file system module ('fs').
const fs = require('fs');

// Read the (entire) contents of the specified file. When read, invoke the
// supplied anonymous function that logs the contents to the console.
fs.readFile('target.txt', function(err, data) {
  // If an error occurs while attempting to read the file, simply throw it.
  // This action will cause the node process to terminate (abruptly).
  if (err) {
    throw err;
  }

  // Simply write the contents of the file to the console.
  console.log(data.toString());
});
