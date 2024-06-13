var randOne = Math.floor(Math.random() * 6) + 1;
var randTwo = Math.floor(Math.random() * 6) + 1;

var text1 = "./images/dice" + randOne + ".png";
var text2 = "./images/dice" + randTwo + ".png";

document.getElementsByClassName("img1")[0].setAttribute("src", text1);
document.getElementsByClassName("img2")[0].setAttribute("src", text2);

if(randOne > randTwo){
    document.querySelector("h1").textContent="🚩Player 1 Wins!";
}

else if(randTwo > randOne){
    document.querySelector("h1").textContent="Player 2 Wins!🚩";
}

else{
    document.querySelector("h1").textContent="🤝Draw!🤝";
}
