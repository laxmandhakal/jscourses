var http = require("http");
const {
    write,
    Read
} = require("./moduleformainfile")

var server = http.createServer(function(request, response) {
    console.log("server created")
    let news = request.url

    let arr = news.split("/")
    console.log(request.url, arr)
    if (arr[1] == "read") {
        Read(arr[2], function(err, done) {
            if (err) {
                response.end("error in read>>")

            } else {
                response.end("success in read>>")

            }

        })
    } else if (arr[1] == "write") {
        write(arr[2], arr[3])
            .then(function(data) {
                response.end("success in write>>", data)

            })
            .catch(function(data) {
                response.end("error in write>>", data)
            })
    } else {
        response.end("wrong entry in url")
    }

})

server.listen(9090, function(err, done) {
    if (err) {
        console.log("error", err)
    } else {
        console.log("done", done)
    }

})