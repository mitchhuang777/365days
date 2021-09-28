var image_start = null;
var image_hide = null;
/* Get Start and Hide canvas */
var canvas_start = document.getElementById("canvas-start");
var canvas_hide = document.getElementById("canvas-hide");
/* Upload start Image */
function uploadStartImage(){
    /* Start image */
    var file_start = document.getElementById("finput_start");
    image_start = new SimpleImage(file_start);
    image_start.drawTo(canvas_start);
}
/* Upload hide Image */
function uploadHideImage(){
    /* Hide image */
    var file_hide = document.getElementById("finput_hide");
    image_hide = new SimpleImage(file_hide);
    image_hide.drawTo(canvas_hide);
}
/* clear bits */
function clearBits(colorval){
    var x = Math.floor(colorval/16)*16;
    return x;
}
/* Clear the lower 4 bits */
function chop2hide(image){
    // for each pixel in the image.
    for(var pixel of image.values()){
        // clear the lower bits of red.
        pixel.setRed(clearBits(pixel.getRed()));
        // clear the lower bits of green.
        pixel.setGreen(clearBits(pixel.getGreen()));
        // clear the lower bits of blue.
        pixel.setBlue(clearBits(pixel.getBlue()));
    }
    // after doing each pixel return the image as the answer.
    return image;
}
/* Get the highest 4 bits of image */
function shift(image){
    // for each pixel in the image.
    for(var pixel of image.values()){
        // shift the red bits over
        pixel.setRed(pixel.getRed()/16);
        // shift the green bits over
        pixel.setGreen(pixel.getGreen()/16);
        // shift the blue bits over
        pixel.setBlue(pixel.getBlue()/16);
    }
    // after doing each pixel return the image as the answer.
    return image;
}
/* Steganography */
function combine(show, hide){
    // make a new image the same size as "show" (call it answer)
    var answer = new SimpleImage(show.getWidth(), show.getHeight());
    // for each pixel in the image
    for(var pixel of answer.values()){
        // get the x and y of that pixel
        var x = pixel.getX();
        var y = pixel.getY();
        // get the pixel in the same place from show
        var showPixel = show.getPixel(x, y);
        // get the pixel in the same place from hide
        var hidePixel = hide.getPixel(x, y);
        // set the red of px to the sum of showPixel's red + hidePixel's red 
        pixel.setRed(showPixel.getRed() + hidePixel.getRed());
        // set the green of px to the sum of showPixel's green + hidePixel's green
        pixel.setGreen(showPixel.getGreen() + hidePixel.getGreen());
        // set the blue of px to the sum of showPixel's blue + hidePixel's blue
        pixel.setBlue(showPixel.getBlue() + hidePixel.getBlue());
    }
    // after doing each pixel, return ans answer of the image we called
    return answer;
}
/* Steganography */
var steg;
function doSteganography(){
    var show = chop2hide(image_start);
    var hide = shift(image_hide);
    steg = combine(show, hide);
    clearCanvas();
    steg.drawTo(canvas_hide);
    showMessage();
}
function showMessage(){
    var msg = document.getElementById("message");
    msg.innerHTML = '<h1 class="message"> Can you see the different between original picture and encode picture?</h1>';
}

/* Clear canvas */
function clearCanvas(){
    var hidectx = canvas_hide.getContext("2d");
    hidectx.clearRect(0, 0, canvas_hide.width, canvas_hide.height);
}
/* Decode the Image */
function doDecode(){
    var canvas_decode = document.getElementById("canvas-decode");
    var decodeImage = extract(steg);
    decodeImage.drawTo(canvas_decode);
}

function extract(image){
    // Create a blank image 
    var blankImage = new SimpleImage(image.getWidth(), image.getHeight());
    // for each pixel in the image
    for(var pixel of blankImage.values()){
        // Get the position of the image.
        var x = pixel.getX();
        var y = pixel.getY();
        var px = image.getPixel(x, y);
        // extract the lowest 4 bits to highest 4 bits (red)
        pixel.setRed(px.getRed()%16*16);
        // extract the lowest 4 bits to highest 4 bits (green)
        pixel.setGreen(px.getGreen()%16*16);
        // extract the lowest 4 bits to highest 4 bits (blue)
        pixel.setBlue(px.getBlue()%16*16);
    }
    // return the extracted image
    return blankImage;
}
