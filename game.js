// Iteration 2: Generate 2 random number and display it on the screen
var body = document.getElementsByTagName("body");
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2")

updateNum();

function updateNum(){
    let num = Math.floor((Math.random() * 100) + 1);
    let num1 = Math.floor((Math.random() * 100) + 1);
    number1.innerHTML = num;
    number2.innerHTML = num1;
    timeLeft = 5;
    score1++;
}

// Iteration 3: Make the options button functional
var greater = document.getElementById("greater-than");
var equal = document.getElementById("equal-to");
var lesser = document.getElementById("lesser-than");

greater.onclick = greaterThan;
equal.onclick = equalTo;
lesser.onclick = lesserThan;

function greaterThan(){
    if(number1.innerHTML>number2.innerHTML){
        updateNum();
    }
    else{
        location.href = "gameover.html";
    }
}

function equalTo(){
    if(number1.innerHTML == number2.innerHTML){
        updateNum();
    }
    else{
        location.href = "gameover.html";
    }
}

function lesserThan(){
    if(number1.innerHTML<number2.innerHTML){
        updateNum();
    }
    else{
        location.href = "gameover.html";
    }
}

// Iteration 4: Build a timer for the game
var timer = document.getElementById("timer");
var timeLeft = 5;
var id = setInterval(countdown,1000);
var score1 = 0;

function countdown(){
    if(timeLeft == 0){
        clearTimeout(id)
        location.href = "gameover.html";
    }
    else{
        timer.innerHTML = timeLeft;
        timeLeft--;
        localStorage.setItem("score1",score1)
    }
}