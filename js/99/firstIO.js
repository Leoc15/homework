const fs = require('fs')

const items = fs.readFileSync(process.argv[2])

const newLines = items.toString().split('\n').length - 1

console.log(newLines)