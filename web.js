var express = require('express'),
    app = express(),
		publicDir = '/pub',
		port = process.env.PORT || 5000;

var blue   = '\033[36m',
		green  = '\033[32m',
		gray   = '\033[1;30m',
		reset  = '\033[0m';

app.use(express.static(__dirname + publicDir));
app.listen(port, function() {
  console.log(blue + 'starting Express\n' + reset +
  						gray +'>>>' + reset + ' Listening on ' + green + port + reset);
});