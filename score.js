// Iteration 5: Store the player score and display it on the game over screen
var again = document.getElementById("play-again-button");
again.onclick = playAgain;

function playAgain(){
    location.href = "game.html";
}

var score = document.getElementById("score-board")

score.innerHTML = localStorage.getItem("score1")