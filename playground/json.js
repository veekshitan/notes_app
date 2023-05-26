const fs = require ('fs')
const bufferData = fs.readFileSync("data.json")
const stringData = bufferData.toString()
const details = JSON.parse(stringData)

details.name = "balla"
details.age = "20"

const finalStringData = JSON.stringify(details)
fs.writeFileSync('data.json', finalStringData)