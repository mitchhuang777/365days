var file = null;
var originalImage = null;
var grayImage = null;
var redImage = null;
var windowImage = null;
var rainbowImage = null;
var blurImage = null;
function loadImage(){
    /* Create a load file image */
    file = document.getElementById("imageInput");
    originalImage = new SimpleImage(file);      // Original pic
    grayImage = new SimpleImage(file);          // gray pic
    redImage = new SimpleImage(file);           // red  pic
    windowImage = new SimpleImage(file);        // window pic
    rainbowImage = new SimpleImage(file);       // rainbow pic
    /* Get Canvas Id */
    canvas = document.getElementById("canvas");
    /* Draw the original image to canvas */
    originalImage.drawTo(canvas);  
}
/* Check whether the file is successful uploaded */
function imageIsLoaded(){
    if(originalImage==null || !originalImage.complete()){
        alert("You don't upload the image.")
        return;
    }
}
/* Turn the picture to gray */
function doGrayScale(){
    imageIsLoaded();
    for(var pixel of grayImage.values()){
        r = pixel.getRed();
        g = pixel.getGreen();
        b = pixel.getBlue();
        avg = (r+g+b)/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    grayImage.drawTo(canvas);
}
/* Turn the picture to red */
function doRedScale(){
    imageIsLoaded();
    for(var pixel of redImage.values()){
        r = pixel.getRed();
        g = pixel.getGreen();
        b = pixel.getBlue();
        avg = (r+g+b)/3;
/* 1. Calculate the average of the pixel’s RGB values 
   2. If the average is less than 128: 
      set the pixel’s red value to two times the average, 
      set the pixel’s green value to zero, 
      and set the pixel’s blue value to zero.
   3. Otherwise: 
      set the pixel’s red value to 255, 
      set the pixel’s green value to two times the average minus 255, 
      and set the pixel’s blue value to two times the average minus 255. */
        if(avg < 128){
            pixel.setRed(2*avg);
            pixel.setGreen(0);
            pixel.setBlue(0);
        }
        else{
            pixel.setRed(255);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(2*avg-255);
        }
    }
    redImage.drawTo(canvas);
}
/* Add a window in your image */
function doWindowScale(){
    imageIsLoaded();
    var margin = 50;
    for(var pixel of windowImage.values()){ 
        var x = pixel.getX();
        var y = pixel.getY();
        /* outside frame */
        if(x<margin || x>windowImage.width-margin || y<margin || y>windowImage.height-margin){
            pixel.setRed(223);
            pixel.setGreen(217);
            pixel.setBlue(253);
        }
        /* horizontal line */
        if(y >= windowImage.height/2 - margin/2 && y <= windowImage.height/2 + margin/2){
            pixel.setRed(223);
            pixel.setGreen(217);
            pixel.setBlue(253);
        }
        /* Vertical lien */
        if(x >= windowImage.width/4-margin/2 && x <= windowImage.width/4+margin/2 ||
           x >= 2*(windowImage.width/4)-margin/2 && x <= 2*(windowImage.width/4)+margin/2 ||
           x >= 3*(windowImage.width/4)-margin/2 && x <= 3*(windowImage.width/4)+margin/2){
            pixel.setRed(223);
            pixel.setGreen(217);
            pixel.setBlue(253);
        } 
    }
    windowImage.drawTo(canvas);
}
/* Rainbow */
function doRainbowScale(){
    imageIsLoaded();
    for(var pixel of rainbowImage.values()){
        var y = pixel.getY();
        r = pixel.getRed();
        g = pixel.getGreen();
        b = pixel.getBlue();
        avg = (r+g+b)/3;
        /* Red */
        if(y<=rainbowImage.height/7){
            if(avg<128){
                pixel.setRed(2*avg);
                pixel.setGreen(0);
                pixel.setBlue(0);
            }
            else{
                pixel.setRed(255);
                pixel.setGreen(2*avg-255);
                pixel.setBlue(2*avg-255);
            }
        }
        /* Orange */
        else if(y<=2*(rainbowImage.height/7) && y>rainbowImage.height/7){
            if(avg<128){
                pixel.setRed(2*avg);
                pixel.setGreen(0.8*avg);
                pixel.setBlue(0);
            }
            else{
                pixel.setRed(255);
                pixel.setGreen(1.2*avg-51);
                pixel.setBlue(2*avg-255);
            }
        }
        /* Yellow */
        else if(y<=3*(rainbowImage.height/7) && y>2*(rainbowImage.height/7)){
            if(avg<128){
                pixel.setRed(2*avg);
                pixel.setGreen(2*avg);
                pixel.setBlue(0);
            }
            else{
                pixel.setRed(255);
                pixel.setGreen(255);
                pixel.setBlue(2*avg-255);
            }
        }
        /* Green */
        else if(y<=4*(rainbowImage.height/7) && y>3*(rainbowImage.height/7)){
            if(avg<128){
                pixel.setRed(0);
                pixel.setGreen(2*avg);
                pixel.setBlue(0);
            }
            else{
                pixel.setRed(2*avg-255);
                pixel.setGreen(255);
                pixel.setBlue(2*avg-255);
            }
        }
        /* Blue */
        else if(y<=5*(rainbowImage.height/7) && y>4*(rainbowImage.height/7)){
            if(avg<128){
                pixel.setRed(0);
                pixel.setGreen(0);
                pixel.setBlue(2*avg);
            }
            else{
                pixel.setRed(2*avg-255);
                pixel.setGreen(2*avg-255);
                pixel.setBlue(255);
            }
        }
        /* Indigo */
        else if(y<=6*(rainbowImage.height/7) && y>5*(rainbowImage.height/7)){
            if(avg<128){
                pixel.setRed(0.8*avg);
                pixel.setGreen(0);
                pixel.setBlue(2*avg);
            }
            else{
                pixel.setRed(1.2*avg-51);
                pixel.setGreen(2*avg-255);
                pixel.setBlue(255);
            }
        }
        /* Violet */
        else{
            if(avg<128){
                pixel.setRed(1.6*avg);
                pixel.setGreen(0);
                pixel.setBlue(1.6*avg);
            }
            else{
                pixel.setRed(0.4*avg+153);
                pixel.setGreen(2*avg-255);
                pixel.setBlue(0.4*avg+153);
            }  
        }
    }
    rainbowImage.drawTo(canvas);
}
/* Blur the image */
function doBlurScale(){
    canvas = document.getElementById("canvas");
    blurImage = new SimpleImage(originalImage.getWidth(), originalImage.getHeight());
    for(var pixel of originalImage.values()){
        var x = pixel.getX();
        var y = pixel.getY();
        var lower = -10;
        var upper = 10;
        if(Math.random()>=0.5){
            /* Blur */
            var x_blur = x + randomInt(lower, upper);
            var y_blur = y + randomInt(lower, upper);
            /* Determine whether x or y exceed the margin */
            /* *** -1 -> would not let x or y exceed margin *** */
            if(x_blur < 0) {x_blur = 0;}
            else if(x_blur > originalImage.getWidth()-1) {x_blur = originalImage.getWidth()-1;}
            if(y_blur < 0) {y_blur = 0;}
            else if(y_blur > originalImage.getHeight()-1) {y_blur = originalImage.getHeight()-1;}
            var pix = originalImage.getPixel(x_blur, y_blur);
            blurImage.setPixel(x, y, pix);
        }
        else if(Math.random() < 0.5){
            blurImage.setPixel(x, y, pixel);
        }
    }
    blurImage.drawTo(canvas);
}
/* Generate number between min and max */
function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
/* Reset the picture to the original one, and initialize the picture settings. */
function reset(){
    imageIsLoaded();
    grayImage = new SimpleImage(file);          // gray pic
    redImage = new SimpleImage(file);           // red  pic
    windowImage = new SimpleImage(file);        // windows pic
    rainbowImage = new SimpleImage(file);       // rainbow pic
    
    originalImage.drawTo(canvas);
}

