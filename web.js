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

var credentials = {};
var credPath = {
  key: '/home/etnbrdcom/certs/key.pem',
  cert: '/home/etnbrdcom/certs/cert.pem' 
}

function checkCerts(trials, cb) {

  if (trials === 0) {
    console.error('certificate not found');
    return;
  }

  var errs = {}
  var i = 2;

  fs.access(credPath.key, fs.F_OK, check('key'));
  fs.access(credPath.cert, fs.F_OK check('cert'));

  function check(file){
    return function (err) {
      errs[file] = err

      if (--i === 0) {
        if (errs.key || errs.cert) {
          console.log(gray + 'certificate not accesible yet, retrying in 15s');
          return setTimeout(verifyCert, 1500, trials - 1)
        } else {
          cb();
        }
      }
    }
  }
}

function log(port) {
  return function() {
    console.log(gray + '>>>' + reset + ' Listening on ' + green + port + reset);
  }
}


function start() {
  console.log(blue + 'reading certificates' + reset);
  credentials.key = fs.readFileSync(credPath.key, 'utf8')
  console.log(gray + '>>>' + reset + ' key.pem ' + green + '✓' + reset);
  credentials.cert = fs.readFileSync(credPath.cert, 'utf8')
  console.log(gray + '>>>' + reset + ' cert.pem ' + green + '✓' + reset);

  app.use(express.static(__dirname + pub));
  console.log(blue + 'starting Express' + reset);

  http.createServer(app).listen(port, log(port));
  https.createServer(credentials, app).listen(port + 443, log(port + 443));
}

checkCerts(5, start);