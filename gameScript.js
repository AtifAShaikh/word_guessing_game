// Word Guessing Game

 //   1. A list of words for our word guessing game. 
 //     Var to hold Wins/Losses/TimerValues.
 //     
 //     Create a function to start the game, and connect it to the start button.
 //     Create a function Start the timer randomly pick word from array and display _ _ _ _ _ 
 
 //   2. We need to create an Array [a,b,c,d, ect] where the letters 

var listOfWords = ["dog", "cat", "frog", "bird"];
var wins = 0;
var losses = 0;
var solution = [];
var answer = [];
//Refs to Win/loss Text and Timer text, and the word text startbutton, restartbutton 

function startGame(){
    
}

function setUpWord(){

}

function loseGame(){

}

function winGame(){

}

function startTimer(){
    var time = 20;
    var timerElement = document.querySelector(".timer_Text");
    
    timerElement.innerHTML="";
    var timer = setInterval(function(){
        time --
        timerElement.textContent=time
    }, 1000);
    
}

startTimer()

function checkKeyboardInput(keyPressed){

}

function listifyString(stringToListify){

}

function displayAnswer(){

}

function restartGame(){

}

// keypressdown that executes the checkKeyboardInput with said key