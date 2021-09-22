var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var image;
var canvas2 = document.getElementById("canvas2");
var image2;

function upload(){
    var fileinput = document.getElementById("finput");
    image = new SimpleImage(fileinput);
    image2 = image;
    clearCanvas();
    image.drawTo(canvas);
}

function clearCanvas () {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function makeGray(){
    for(var pixel of image2.values()){
        avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        pixel.setRed(avgColor);
        pixel.setGreen(avgColor);
        pixel.setBlue(avgColor);
    }
    image2.drawTo(canvas2);
}