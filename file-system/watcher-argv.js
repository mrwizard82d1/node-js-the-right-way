// Import the fs (file system) module.
// "Require" returns an object: the module being required.
// By declaring it
const fs = require('fs');

// Get the filename to watch from the command line arguments.
const filename = process.argv[2];
if (! filename) {
  throw Error("What should I watch - TV?");
}

// Watch the specified target for changes. When the file changes, invoke the
// anonymous function.
fs.watch(filename, function() {
  console.log('File ' + filename + ' just changed!');
});

// Remember that this message will print *before* other messoges.
console.log('Now watching ' + filename + ' for changes...');
