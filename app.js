const Raspistill = require('node-raspistill').Raspistill;
const fs = require('fs');

const raspistill = new Raspistill({
    fileName: 'current',
    encoding: 'png',
    width: 1024,
    height: 768,
    outputDir: "/var/www/html/photos"
});

var interval = setInterval(function() {

  raspistill.takePhoto()
    .then((photo) => { })
    .catch((error) => {
        console.error('something bad happened', error);
    });

}, 10000);



