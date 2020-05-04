async function hello(name) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log("Hello, " + name)
            resolve(name)
        }, 1000)
    })
}

async function talk() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Bla bla bla bla ...')
            resolve()
            // reject('There is an error')
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

const main = async () => {
    let name = await hello('Daniel')
    await talk()
    await talk()
    await talk()
    await bye(name)
    console.log("Process finished")
}

console.log("Process started...")
main()
