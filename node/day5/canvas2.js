function doLime(){
    var canvas = document.getElementById("canvas");
    canvas.style.background = "lime";
}

function doColor(){
    var canvas = document.getElementById("canvas");
    var color = document.getElementById("clr");
    canvas.style.backgroundColor = color.value;
}

function doSquare(){
    var canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    var sliderinput = document.getElementById("slr");
    len = sliderinput.value;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "pink";   
    context.fillRect(10, 10, len, len);
    context.fillRect(parseInt(len)+20, 10, len, len);
    context.fillRect(len*3+30, 10, len, len);

}