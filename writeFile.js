const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const fs = require('fs');


readline.question(`What is the text you would like to save?`, (text) => {
  fs.writeFile('Output.txt', text, (err) => {

    // In case of a error throw err. 
    if (err) throw err;
  })

  readline.close()
})