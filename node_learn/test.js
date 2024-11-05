var http = require("http");
var url = require("url");

http.createServer(function (req, res) { // req is the incoming HTTP request
  res.writeHead(200, {"Content-Type": "text/html"});
  var q = url.parse(req.url, false).query; // if true, then parse query string to object, and if false, then leave it as unparsed query string
  // var txt = q.year + " " + q.month;
  var see = "see " + q
  res.write(see);
  res.end();
}).listen(8080);
