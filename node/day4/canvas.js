function changeColor(){
    var canvasElement1 = document.getElementById("canvas1");
    var canvasElement2 = document.getElementById("canvas2");
    canvasElement1.className = "blueback";
    canvasElement2.className = "orangeback";
}

function doRed(){
    var canvasElement3 = document.getElementById("canvas3");
    canvasElement3.style.background = "red";
}

function doBlue(){
    var canvasElement4 = document.getElementById("canvas4");
    canvasElement4.style.background = "blue";
    var context = canvasElement4.getContext("2d");
    context.fillStyle = "yellow";
    context.fillRect(10, 10, 60, 60);
    context.fillRect(80, 10, 60, 60);
    context.fillStyle = "black";
    context.font = "20px Arial";
    context.fillText("Hello", 15, 45)
}

function doGreenBack(){
    var canvasElement4 = document.getElementById("canvas4");
    canvasElement4.style.background = "green";
}

function clearTxt(){
    var canvasElement4 = document.getElementById("canvas4");
    var context = canvasElement4.getContext("2d");
    context.clearRect(0, 0, canvasElement4.width, canvasElement4.height);


}