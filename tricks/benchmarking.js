let sum = 0
console.time('loop')
for (let i = 0; i < 100000000; i++) {
    sum++
}
console.timeEnd('loop')

console.time('async')
asynchronous()
    .then(() => {
        console.timeEnd('async')
    })
console.timeEnd('async')

console.time('loopTwo')
for (let i = 0; i < 10000000000; i++) {
    sum++
}
console.timeEnd('loopTwo')

function asynchronous() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('End asynchronous functions')
            resolve()
        }, 1000);
    })
}