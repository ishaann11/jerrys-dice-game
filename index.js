
var randomNumber1= Math.random();
randomNumber1= randomNumber1*7;
randomNumber1= Math.floor(randomNumber1);

var randomImage1= "dice" + randomNumber1 + ".png";

var randomImageSource= "images/" + randomImage1;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);




var randomNumber2= Math.random();
randomNumber2= randomNumber2*7;
randomNumber2= Math.floor(randomNumber2);

var randomImage2= "dice" + randomNumber2 + ".png";

var randomImageSource2= "images/" + randomImage2;

var image2= document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= "player 1 wins🚩"
}

else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML= "player 2 wins🚩"
}

else{
    document.querySelector("h1").innerHTML= "draw📍"
}