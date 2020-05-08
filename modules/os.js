const os = require('os')

console.log('ARCHITECTURE:',os.arch())
console.log('PLATFORM:', os.platform())
// console.log('CPUS:', os.cpus())
// console.log('CONSTANTS:',os.constants)

const SIZE = 1024
function kb(bytes) {return bytes / SIZE}
function mb(bytes) {return kb(bytes) / SIZE}
function gb(bytes) {return mb(bytes) / SIZE}


console.log('FREE MEM:',os.freemem())
console.log('FREE MEM KB:',kb(os.freemem()))
console.log('FREE MEM MB:',mb(os.freemem()))
console.log('FREE MEM GB:',gb(os.freemem()))

console.log(os.homedir())
console.log(os.tmpdir())
console.log(os.hostname())
// console.log(os.networkInterfaces())