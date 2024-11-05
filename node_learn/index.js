var http = require("http"); // get http module
var some_module = require("./some_module"); // get module
var fs = require("fs");

// executed when client tries to access computer (server) on port 8080 - this is an HTTP response
http.createServer(function (req, res) { // res is HTTP response stream
    fs.readFile("some_html.html", function(err, data) {
        res.writeHead(200, {"Content-Type": "text/html"}); // specifies type of content being sent and status code if successful
        res.write(data);
        res.end(); // streams expect you to tell them when you no longer have any data to write to them, otherwise it will keep waiting to consume more data
    });
}).listen(8080); // this computer serves as server for other clients on port 8080
