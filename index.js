var num1 =Math.random()*6;
var num2=1+Math.floor(num1);

var randomimagesource="images/dice"+num2+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimagesource);

var num3 =Math.random()*6;
var num4=1+Math.floor(num3);
var randomimagesource="images/dice"+num4+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimagesource);

if(num4>num2){
    document.querySelector("h1").innerHTML ="player2 is winner"
}
else if(num4<num2){
    document.querySelector("h1").innerHTML ="player1 is winner"
}
else{
    document.querySelector("h1").innerHTML ="DRAW"
}