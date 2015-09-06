// Import the fs (file system) module.
// "Require" returns an object: the module being required.
// By declaring it
const fs = require('fs');

// Watch the specified target for changes. When the file changes, invoke the
// anonymous function.
fs.watch('target.txt', function() {
  console.log('File "target.txt" just changed!');
});

// Remember that this message will print *before* other messoges.
console.log('Now watching "target.txt" for changes...');
