var fs = require('fs'),
    http = require('http'),
    express = require('express'),
    app = express(),
    pub = '/public',
    port = process.env.PORT || 5000;

var blue   = '\033[36m',
    green  = '\033[32m',
    gray   = '\033[1;30m',
    reset  = '\033[0m';


app.use(express.static(__dirname + pub));
console.log(blue + 'starting Express' + reset);

http.createServer(app).listen(port, function() {
  console.log(gray + '>>>' + reset + ' Listening on ' + green + port + reset);
});
