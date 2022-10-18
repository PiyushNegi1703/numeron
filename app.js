// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
var playButton = document.getElementById("play-button")

playButton.onclick = changeLoc;

function changeLoc(){
    location.href = "game.html";
}