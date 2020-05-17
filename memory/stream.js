const fs = require('fs')
const stream = require('stream')
const util = require('util')

let data = ''
let readableStream = fs.createReadStream(__dirname + '/input.txt')
readableStream.setEncoding('UTF8')
// readableStream.on('data', function (chunk) {
//     console.log(chunk)
// })

// readableStream.on('end', function () {
//     console.log(data)
// })

// ! Write on standard output

// process.stdout.write('Hello')
// process.stdout.write('What')
// process.stdout.write('Up')

const Transform = stream.Transform

function Upper() {
    Transform.call(this)
}
util.inherits(Upper, Transform)
Upper.prototype._transform = function (chunk, codification, cb) {
    chunkUpper = chunk.toString().toUpperCase()
    this.push(chunkUpper)
    cb()
}

let upper = new Upper()

readableStream
    .pipe(upper)
    .pipe(process.stdout)