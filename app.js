const Raspistill = require('node-raspistill').Raspistill;
const fs = require('fs');

const raspistill = new Raspistill({
    fileName: 'image%04d',
    encoding: 'jpg',
    width: 640,
    height: 480,
    //outputDir: ""
});

let i = 0;
raspistill.timelapse(1000, 30000, (image) => {
    i++;
    console.log('photo ' + i + ' is now stored on drive ');
})
    .then(() => {
        console.log('timelapse ended')
    })
    .catch((err) => {
        console.log('something bad happened', err);
    });