// For Player 1
// genrating rand number b/w 1-6
var randomNumber1 = Math.ceil(Math.random() * 6);
// picking random dice image with random number for player1
var randomeDiceImage = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomeDiceImage);

// For Player 2
// genrating randome number b/w 1-6
var randomNumber2 = Math.ceil(Math.random() * 6);
// picking random dice image with random number
var randomeDiceImage = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomeDiceImage);





    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw!"
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins"
    } else {
        document.querySelector("h1").innerHTML = "Player 2 Wins"
    }
