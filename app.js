const Raspistill = require('node-raspistill').Raspistill;
const fs = require('fs');

const raspistill = new Raspistill({
    fileName: 'current',
    encoding: 'png',
    width: 3280,
    height: 2464,
    outputDir: "/var/www/html/photos"
});

var interval = setInterval(function() {

  raspistill.takePhoto()
    .then((photo) => { })
    .catch((error) => {
        console.error('something bad happened', error);
    });

}, 60000);



