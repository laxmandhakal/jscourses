var fs = require("fs");

function write(filename, content) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(filename, content, function(err, done) {
            if (err) {
                reject(err)
            } else {
                resolve(done)
            }
        })
    })
}

function Read(filename, cb) {
    fs.readFile(filename, "UTF-8", function(err, done) {
        if (err) {
            cb(err)
        } else {
            cb(null, done)
        }
    })
}

function Rename(oldfile, newfile) {
    return new Promise(function(resolve, reject) {
        fs.rename(oldfile, newfile, function(err, done) {
            if (err) {
                reject(err)
            } else {
                resolve(done)
            }
        })
    })
}

function delFile(filename) {
    return new Promise(function(resolve, reject) {
        fs.unlink(filename, function(err, done) {
            if (err) {
                reject(err)
            } else {
                resolve(done)
            }
        })
    })
}
module.exports = {
    write,
    Read,
    Rename,
    delFile
}