var fs = require('fs'),
    http = require('http'),
    https = require('https'),
    express = require('express'),
    app = express(),
    pub = '/pub',
    port = process.env.PORT || 5000;

var blue   = '\033[36m',
    green  = '\033[32m',
    gray   = '\033[1;30m',
    reset  = '\033[0m';

var credentials = {
  key: fs.readFileSync('/home/etnbrdcom/certs/key.pem', 'utf8'),
  cert: fs.readFileSync('/home/etnbrdcom/certs/cert.pem', 'utf8')
};

function log(port) {
  return function() {
    console.log(gray + '>>>' + reset + ' Listening on ' + green + port + reset);
  }
}

app.use(express.static(__dirname + pub));
console.log(blue + 'starting Express' + reset);

http.createServer(app).listen(port, log(port));
https.createServer(credentials, app).listen(port + 443, log(port + 443));