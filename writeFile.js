const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const fs = require('fs');


readline.question(`What is your primary goal today? `, (text) => {
  fs.writeFile('Output.txt', text, (err) => {

    // In case of a error throw err. 
    if (err) throw err;
  })

  readline.close()
})