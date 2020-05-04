global.myVariable = 'value'
console.log(myVariable)

let i = 0
let interval = setInterval(() => {
    if (i === 3) {
        clearInterval(interval)
    }
    i++
    console.log('Hello')
}, 1000)

setImmediate(() => {
    console.log('Hello immediate')
})

// console.log(process)
console.log(__dirname)
console.log(__filename)