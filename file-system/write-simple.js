const fs = require('fs');

// Write 'We the people...' to the file, 'target.txt.'
fs.writeFile('target.txt', 'We the people...', function(err) {
  // If an error occurs, throw it terminating the program.
  if (err) {
    throw err;
  }

  // Log a congratulatory message to the console.
  console.log('File saved! Good for me. :)');
})
