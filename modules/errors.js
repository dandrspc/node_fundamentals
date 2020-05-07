function anotherFunction() {
    goToBreak()
}


function goToBreak() {
    return 3 + z    
}

function goToBreakAsync(cb) {
    setTimeout(() => {
        try{
            return 3 + z
        }catch(err) {
            cb(err)
        }
    })
}

try {
    // goToBreak()
    goToBreakAsync(console.log)
}catch(err) {
    console.error('Error ocurred');
    console.error(err.message);
    
}
console.log("We've capture the error")
console.log('This is at the end')