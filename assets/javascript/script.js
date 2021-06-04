// identify start button
var startBtn = document.querySelector("#start");

// identify container div for qeustions and answers for appending purposes
var parentDiv = document.querySelector(".container"); 

// identify high scores link
var scoreBtn = document.querySelector("#high-scores"); 

// time variable 
var timer = 120; 

//player score variable; player starts with 10 points
var playerScore = 10;

// create question header elements
var question = document.createElement("h2");
question.textContent = "question1";
question.className = ".questions"; 


// create answer button elements
var answer1 = document.createElement("button"); 
answer1.className = ".btn.style";
var answer2 = document.createElement("button");
answer2.className = ".btnStyle";
var answer3 = document.createElement("button");
answer3.className = ".btnStyle";
var answer4 = document.createElement("button");
answer4.className = ".btnStyle";
var answer5 = document.createElement("button");
answer5.className = ".btnStyle";



function questionOne() {

    parentDiv.appendChild("question");

    // add 4 button elements below
    parentDiv.appendChild(answer2); 
    

    questionTwo();
};

function questionTwo() {
    // change h2 tags text content below

    // add 4 button elements below
    questionThree();
};

function questionThree() {
    // change h2 tags text content below

    // add 4 button elements below
    questionFour();
};

function questionFour() {
    // change h2 tags text content below

    // add 4 button elements below
    questionFive();
};

function questionFive() {
    // change h2 tags text content below

    // add 4 button elements below
}







function startQuiz() {
    
    alert('Once you click "ok" the timer will begin. Each missed answer results in 10 seconds being subtracted from the timer... good luck!')

    // code for timer should go below

    // question 1 should be appended to h2 element

    // buttons with text content of answers will be appeneded

    // add conditional to check for right or wrong answer below

    // add if statement to display either right or wring after player submits answer

    // add to player score variable if answer is correct

    // subtract from time count if player's answer is wrong 

    questionOne();
};


// add event listener to start button 
startBtn.addEventListener("click", startQuiz)


