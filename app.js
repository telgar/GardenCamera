const Raspistill = require('node-raspistill').Raspistill;
const fs = require('fs');

const raspistill = new Raspistill({
    fileName: 'image',
    encoding: 'jpg',
    width: 640,
    height: 480,
    outputDir: "/var/www/html/photos"
});

var interval = setInterval(function(str1, str2) {
  raspistill.takePhoto()
    .then((photo) => {
        console.log('took photo', photo);
    })
    .catch((error) => {
        console.error('something bad happened', error);
    });
}, 10000);

clearInterval(interval);

