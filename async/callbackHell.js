function hello(name, myCallback) {
    setTimeout(function () {
        console.log("Hello, " + name)
        myCallback(name)
    }, 1000)
}

function talk(myCallback) {
    setTimeout(function () {
        console.log('Bla bla bla bla ...')
        myCallback()
    }, 1000)
}

function bye(name, myCallback) {
    setTimeout(function () {
        console.log('Bye', name)
        myCallback()
    }, 1000)
}

function conversation(name, times, callback){
    if (times > 0) {
        talk(function() {
            conversation(name, --times, callback)
        })
    }else {
        bye(name, callback)
    }
}

// -- 

console.log('Starting process...')
hello('Daniel', function(name) {
    conversation(name, 3 , function() {
        console.log('Process finished')
    })
})

// hello("Daniel", function (name) {
//     talk(function () {
//         talk(function () {
//             talk(function () {
//                 bye(name, function () {
//                     console.log("Finishing process")
//                 })
//             })
//         })
//     })
// })