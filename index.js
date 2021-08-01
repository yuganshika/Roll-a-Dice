if (window.performance.navigation.type === 1) {
  rollDice();
}

function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource1 = "dice" + randomNumber1 + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "✨ Player 1 Wins!";
    document.querySelector("h1").setAttribute("style","font-family: 'MonteCarlo', cursive;");
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! ✨";
    document.querySelector("h1").setAttribute("style","font-family: 'MonteCarlo', cursive;");
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
    document.querySelector("h1").setAttribute("style","font-family: 'MonteCarlo', cursive;");
  }
}
