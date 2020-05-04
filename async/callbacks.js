function hello (name, myCallback){
    setTimeout(function() {
        console.log("Hello, " + name) 
        myCallback(name)   
    }, 1000)
}

function bye (name, myCallback) {
    setTimeout(function() {
        console.log('Bye', name)
    }, 1000)
}

console.log('Starting process')
hello  ("Daniel", function(name) {
    bye(name, function() {
        console.log("Finishing process")
    })
})