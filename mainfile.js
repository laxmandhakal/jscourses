const {
    write,
    Read,
    Rename,
    delFile
} = require("./moduleformainfile")

write("hari.txt", "My name is hari")
    .then(function(data) {
        console.log("success in write>>", data)

    })
    .catch(function(data) {
        console.log("error in write>>", data)
    })
Read("hari.txt", function(err, done) {
    if (err) {
        console.log("error in read>>", err)

    } else {
        console.log("success in read>>", done)

    }

})
Rename("lax.txt", "laxman.txt")
    .then(function(data) {
        console.log("success in rename>>", data)

    })
    .catch(function(data) {
        console.log("error in rename>>", data)
    })
delFile("max.txt")
    .then(function(data) {
        console.log("success in delFile>>", data)

    })
    .catch(function(data) {
        console.log("error in delFile>>", data)
    })