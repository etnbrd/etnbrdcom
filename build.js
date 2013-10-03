/*var ams = require('ams');

var publ = __dirname + '/pub',
    src = __dirname + '/src',
    host = '';

ams.build
    // create a build for the dir
    .create(src)
    // find all files in it
    .find()
    // change processors options
    .process({
        dataimage : true,
        cssmin : true,
        cssimport : true,
        texttransport: false,
        uglifyjs: {
            verbose: true
        }
    })
    // write them to disk
    .write(publ)
    // stdout success message
    .end();*/

var opra = require('opra');

console.log(opra);

var file = opra.build(__dirname + '/src', { inline: true });
console.log(file);



