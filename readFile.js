const readline = require('readline');
const fs = require('fs');

const readInterface = readline.createInterface({
  input: fs.createReadStream('./toRead.txt'),
  output: process.stdout,
  console: false
});