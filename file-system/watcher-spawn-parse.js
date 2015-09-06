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
  // The anonymous function runs the command `ls -lh filename` in a shell.
  let ls = spawn('ls', ['-lh', filename]);

  // It captures the output of the command by listening for 'data' events
  // (that is, the text emitted by the child process when it writes output).
  //
  // The variable, `chunk` is a buffer. It is allocated by the Node
  // core outside of the JavaScript engine. Because it is binary data,
  // it is converted to a string using an encoding. By default, the
  // `toString` method uses the UTF-8 encoding.
  let output = '';
  ls.stdout.on('data', function(chunk) {
    output += chunk.toString();
  });

  // When the child process terminates, I split the words written by the child
  // process and write the first, fifth and eighth words to the console. These
  // parts are the file permissions, its size (in bytes), and its name.
  ls.stdout.on('close', function() {
    let parts = output.split(/\s+/);
    console.dir([parts[0], parts[4], parts[8]])
  })
});

// Remember that this message will print *before* other messoges.
console.log('Now watching ' + filename + ' for changes...');
