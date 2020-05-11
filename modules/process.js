process.on('beforeExit', () => {
    console.log('Process will finish')
})

process.on('exit', () => {
    console.log('Process finished')
})

process.on('uncaughtException', (err, origin) => {
    console.log('Uncaught Exception')
    console.error(err)
})

noExistFunction()