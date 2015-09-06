'use strict';

// In the curernt version of JavaScript, one **cannot** 'use strict' with const
// declarations

// Import the fs (file system) module.
// "Require" returns an object: the module being required.
// By declaring it
const fs = require('fs');

// Import the child_process module; however, only get a single function, spawn.
const spawn = require('child_process').spawn

// Get the filename to watch from the command line arguments.
const filename = process.argv[2];
if (! filename) {
  throw Error("No file to watch.");
}

// Watch the specified target for changes. When the file changes, invoke the
// anonymous function.
fs.watch(filename, function() {
  // The anonymous function runs the command `ls -lh filename` in a shell and
  // pipes its output to the standard output of the node process.
  let ls = spawn('ls', ['-lh', filename]);
  ls.stdout.pipe(process.stdout);
});

// Remember that this message will print *before* other messoges.
console.log('Now watching ' + filename + ' for changes...');
