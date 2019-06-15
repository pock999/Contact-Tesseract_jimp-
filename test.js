const path = require('path');
const jimp = require('jimp');
const { TesseractWorker } = require('./node_modules/tesseract.js');


jimp.read('C:/Users/rick444/Desktop/exercise/nodejs_Tesseract-OCR/test.png')
.then(lenna => {
    return lenna
    .resize(128, 50) // resize
    .gaussian(1)
    .contrast(0.8)
    .write('1.png')
})
.then(function(){
    var [,, imagePath] = process.argv;
    var image = path.resolve('C:/Users/rick444/Desktop/exercise/nodejs_Tesseract-OCR/1.png');
    var tessWorker = new TesseractWorker();
    console.log(`Recognizing ${image}`);
    tessWorker.recognize(image)
    .progress((info) => {
        console.log(info);
    })
    .then(({ text }) => {
        console.log(text);
        //worker.terminate();
    })
    .catch((err) => {
        console.log('Error\n', err);
    })
    .finally(() => {
        process.exit();
    });
})
.catch(err => {
    console.error(err);
});









