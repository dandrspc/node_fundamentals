const http = require('http')

http.createServer(router).listen(3000)

function router(req, res) {
    console.log('New Request')
    console.log(req.url)

    switch (req.url) {
        case '/hello':
            res.write('Hello')
            res.end()
            break
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.write('Error 404: Page not found')
            res.end()
    }

    // res.writeHead(201, { 'Content-Type': 'text/plain'})
    // //Write a new response to the user
    // res.write('Hello, I already know how to use HTTP in NodeJS')
    // res.end()
}

console.log('The server is listening at localhost:3000')