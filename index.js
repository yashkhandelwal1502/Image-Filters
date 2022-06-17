var image = null;
var imagecopy = null;



function upload() {
    var img = document.getElementById("image");
    image = new SimpleImage(img);
    var canvas = document.getElementById("can");
    image.drawTo(canvas);
    imagecopy = image;
}

function clr() {
    upload();
}

function doGray() {
    //if ( isImageLoaded(imageCopy) == true ){
    for (var pixel of imagecopy.values()) {
        var avg = (pixel.getGreen() + pixel.getBlue() + pixel.getRed()) / 3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
        // }
    }
    var canvas = document.getElementById("can");
    imagecopy.drawTo(canvas);
}

function doRed() {
    //if ( isImageLoaded(imageCopy) == true ){
    for (var pixel of imagecopy.values()) {
        var avg = (pixel.getGreen() + pixel.getBlue() + pixel.getRed()) / 3;
        if (avg < 128) {
            pixel.setRed(2 * avg);
            pixel.setGreen(0);
            pixel.setBlue(0);
        } else {
            pixel.setRed(255);
            pixel.setGreen((2 * avg) - 255);
            pixel.setBlue((2 * avg) - 255);
        }
    }
    var canvas = document.getElementById("can");
    imagecopy.drawTo(canvas);
}

function doRainbow() {
    var h = imagecopy.getHeight();
    var hh = h / 7;
    for (var pixel of imagecopy.values()) {
        var avg = (pixel.getGreen() + pixel.getBlue() + pixel.getRed()) / 3;
        var x = pixel.getX();
        if (avg < 128) {
            if (x <= hh) {
                pixel.setRed(2 * avg);
                pixel.setGreen(0);
                pixel.setBlue(0);
            }
            if (x > hh && x >= 2 * hh) {
                pixel.setRed(2 * avg);
                pixel.setGreen(0.8 * avg);
                pixel.setBlue(0);
            }
            if (x > 2 * hh && x >= 3 * hh) {
                pixel.setRed(2 * avg);
                pixel.setGreen(2 * avg);
                pixel.setBlue(0);
            }
            if (x > 3 * hh && x >= 4 * hh) {
                pixel.setRed(0);
                pixel.setGreen(2 * avg);
                pixel.setBlue(0);
            }
            if (x > 4 * hh && x >= 5 * hh) {
                pixel.setRed(0);
                pixel.setGreen(0);
                pixel.setBlue(2 * avg);
            }
            if (x > 5 * hh && x >= 6 * hh) {
                pixel.setRed(0.8 * avg);
                pixel.setGreen(0);
                pixel.setBlue(2 * avg);
            }
            if (x > 6 * hh && x >= 7 * hh) {
                pixel.setRed(1.6 * avg);
                pixel.setGreen(0);
                pixel.setBlue(1.6 * avg);
            }
        } else {
            if (x <= hh) {
                pixel.setRed(255);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(2 * avg - 255);
            }
            if (x > hh && x >= 2 * hh) {
                pixel.setRed(255);
                pixel.setGreen(1.2 * avg - 51);
                pixel.setBlue(2 * avg - 255);
            }
            if (x > 2 * hh && x >= 3 * hh) {
                pixel.setRed(255);
                pixel.setGreen(255);
                pixel.setBlue(2 * avg - 255);
            }
            if (x > 3 * hh && x >= 4 * hh) {
                pixel.setRed(2 * avg - 255);
                pixel.setGreen(255);
                pixel.setBlue(2 * avg - 255);
            }
            if (x > 4 * hh && x >= 5 * hh) {
                pixel.setRed(2 * avg - 255);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(255);
            }
            if (x > 5 * hh && x >= 6 * hh) {
                pixel.setRed(1.2 * avg - 51);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(255);
            }
            if (x > 6 * hh && x >= 7 * hh) {
                pixel.setRed(0.4 * avg + 153);
                pixel.setGreen(2 * avg255);
                pixel.setBlue(0.4 * avg + 153);
            }
        }
    }
    var canvas = document.getElementById("can");
    imagecopy.drawTo(canvas);
}

function clrcan() {
    var canvas = document.getElementById("can");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    document.getElementById("image").innerHTML = "no file";
}