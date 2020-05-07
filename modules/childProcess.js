const {
    exec, 
    spawn
} = require('child_process')

//! Executes a process from other program
// exec('node modules/console.js', (err, stdout, sterr) => {
//     if(err) {
//         console.error(err)
//         return false        
//     }

//     console.log(stdout)
// })

let process = spawn('ls', ['-la'])

// console.log(process)
console.log(process.pid)
console.log(process.connected)

process.stdout.on('data', data => {
    console.log('Killed?',process.killed);
    console.log(data.toString())
})

process.on('exit', () => {
    console.log('Killed?',process.killed);
    console.log('Process ended')
})