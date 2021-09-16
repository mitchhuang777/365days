/* Show the sentences */
function clickbutton1(){
    alert("Oh! Don't click me. You little bastard!")
}
/* Show the sentences */
function clickbutton2(){
    alert("What... What r u doing! Stop it!")
}
/* Prompt, then show the sentences */
function clickbutton3(){
    var res = confirm("What do you want to choose?")
    if(res){
        alert("You press OK!");
    }
    else{
        alert("Why you cancel me:(");
    }
}
/* Change bgcolor of div4 and div5 */
var count = 0;
function changeColor(){
    var div4Element = document.getElementById("div4");
    var div5Element = document.getElementById("div5");
    count++;
    if(count%2 == 1){
        div4Element.className = "fuchsiaback";
        div5Element.className = "orangeback";
    }
    else{
        div4Element.className = "orangeback";
        div5Element.className = "fuchsiaback";
    }
}
/* Change text of div4 and div5 */
var count2 = 0;
function changeText(){
    var div4Element = document.getElementById("div4");
    var div5Element = document.getElementById("div5");
    count2++;
    if(count2%2 == 1){
        div4Element.innerHTML = "Magic";
        div5Element.innerHTML = "Power";
    }
    else{
        div4Element.innerHTML = "Power";
        div5Element.innerHTML = "Magic";
    }
}

var count3 = 0;
function changeColor2(){
    count3++;
    if(count3%2 == 1){
        document.getElementById("text1").style.color = "gold";
        document.getElementById("text2").style.color = "blue";
        document.getElementById("text3").style.color = "#ff8800";
        document.getElementById("text4").style.color = "grey";
    }
    else{
        document.getElementById("text1").style.color = "black";
        document.getElementById("text2").style.color = "black";
        document.getElementById("text3").style.color = "black";
        document.getElementById("text4").style.color = "black";
    }
}

var count4 = 0;
function changeText2(){
    count4++;
    if(count4%2 == 1){
        document.getElementById("button1").value = "ME! Change";
    }
    else{
        document.getElementById("button1").value = "Change ME!";
    }
}