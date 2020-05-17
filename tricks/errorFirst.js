function asynchronous(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z
            callback(null, a)
        } catch (e) {
            callback(e)
        }
    }, 1000);
}

asynchronous(function (err, data) {
    if (err) {
        console.error("We have an error")
        console.error(err)
        return false
        // throw err; !Will not work
    }

    console.log(`My data is ${data}`)
})