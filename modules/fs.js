const fs = require('fs');

const read = (path, callback) => {
    fs.readFile(path, (err, data) => {
        callback(data.toString())
    })
}

const write = (path, data, callback) => {
    fs.writeFile(path, data, (err) => {
        if (err) {
            console.error('Error while writing ',  err)
        }else {
            console.log('File written')
        }
    })
}

const deleteFile = (path, callback) => {
    fs.unlink(path, callback)

}

// read(__dirname + '/file.txt', console.log)
// write(__dirname + '/_file.txt', 'Im a new file', console.log)
deleteFile(__dirname + '/_file.txt', console.log)