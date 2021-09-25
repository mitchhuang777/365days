var fgimage = null;     /* foreground image */
var bgimage = null;     /* background image */
var fgcanvas = document.getElementById("fg-canvas");
var bgcanvas = document.getElementById("bg-canvas");
var fgcontext = fgcanvas.getContext("2d");
var bgcontext = bgcanvas.getContext("2d");

/* load foreground image */
function loadForegroundImage(){
    fgname = document.getElementById("fginput");
    fgimage = new SimpleImage(fgname); 
    fgimage.drawTo(fgcanvas);
}
/* load background image */
function loadBackgroundImage(){
    bgname = document.getElementById("bginput");
    bgimage = new SimpleImage(bgname);
    bgimage.drawTo(bgcanvas);
}
/* combine two image */
function doGreenScreen(){
    // clearCanvas();
    if(fgimage == null || !fgimage.complete()){
        alert("Foreground Image not upload");
        return;
    }
    if(bgimage == null || !bgimage.complete()){
        alert("Background Image not upload");
        return;
    }
    if(fgimage.width != bgimage.width || fgimage.height != bgimage.height){
        alert("The images are different sizes, therefore we can't combine it.")
        return;
    }
    var output = new SimpleImage(fgimage.width, fgimage.height);
    clearCanvas();
    for(var fgpixel of fgimage.values()){     
        var x = fgpixel.getX();
        var y = fgpixel.getY();
        if(fgpixel.getGreen() >= 220){
            var bgpixel = bgimage.getPixel(x, y);
            output.setPixel(x, y, bgpixel);
        }
        else{
            output.setPixel(x, y, fgpixel);
        }
    }
    output.drawTo(bgcanvas);
}
/* Clear the canvas */
function clearCanvas(){
    fgcontext.clearRect(0, 0, fgcanvas.width, fgcanvas.height);
    bgcontext.clearRect(0, 0, bgcanvas.width, bgcanvas.height);
}