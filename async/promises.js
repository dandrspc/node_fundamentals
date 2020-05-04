function hello(name) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log("Hello, " + name)
            resolve(name)
        }, 1000)
    })
}

function talk() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Bla bla bla bla ...')
            // resolve()
            reject('There is an error')
        }, 1000)

    })

}

function bye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Bye', name)
            resolve()
        }, 1000)
    })
}

// --

console.log('Starting process ...')
hello('Daniel')
    .then(talk)
    .then(bye)
    .then(() => {
        console.log('Process finished')
    })
    .catch(err => {
        console.error('Error')
        console.error(err)
    })