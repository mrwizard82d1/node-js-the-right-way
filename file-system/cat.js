#!/usr/bin/env node

// The opening #! line invokes node on this script.

// The following line is a single line that:
// - Imports the file system module.
// - Invokes the method `createReadStream.`
// - Invokes the `pipe` method on the `Stream` returned by
//   'createReadStream.'
//
// These steps are all required to read the contents of the file specified on
// the command line and write the contents to the standard output of the node
// process.
//
// This script performs no error checking on the value supplied on the command
// line (if any) and will throw an `Error` if an error occurs.
require('fs').createReadStream(process.argv[2]).pipe(process.stdout);
