var app = require('http').createServer(handler)
var fs = require('fs');
var mime = require('mime');

var fswatcher = fs.watch('../src', function(){});

app.listen(9090);

function handler (req, res) {
 var filePath = "../src"+req.url;
 if(req.url == "/"){
  filePath = "../src/index.html";
 }
  fs.readFile(filePath,
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200,{'Content-Type': mime.lookup(filePath)});
    res.end(data);
  });
}