// identify start button
var startBtn = document.querySelector("#start");

// identify container div for qeustions and answers for appending purposes
var parentDiv = document.querySelector("#parentDiv"); 

// identify container for high scores and time 
var scoreContainer = document.querySelector("#top-container");

// identify body 
var body = document.querySelector("body"); 

// identify high scores link
var highScores = document.querySelector("#high-scores"); 

// previous scores
 var previousScores = document.querySelector("#previous-scores");

//player score variable; player starts with 10 points
var playerScore = 10;

// get playerScore from localStorage
var getPlayerScore = localStorage.getItem("playerScore");



// create new <div> parent container for question and answers
var newDiv = document.createElement("div")
newDiv.className = "container"; 

// create question header elements
var question1 = document.createElement("h2");
question1.className = "questions";
question1.textContent = "What symbols should be used when identifying an item's position in a string or array?";



// create answer button elements for quesion 1
var answer1 = document.createElement("button"); 
answer1.className = "answerBtns";
answer1.textContent = "These brackets: [ ]";
var answer2 = document.createElement("button");
answer2.className = "answerBtns";
answer2.textContent = "These brackets: { } ";
var answer3 = document.createElement("button");
answer3.className = "answerBtns";
answer3.textContent = "Parantheses ( )";
var answer4 = document.createElement("button");
answer4.className = "answerBtns";
answer4.textContent = "Dot notation . ";
var answer5 = document.createElement("button");
answer5.className = "answerBtns";
answer5.textContent = "IDK";



// questionOne function will be responsible for add event listeners to buttons. Once a button is clicked, an alert displays letting the player know they are either correct or wrong. Also, depending on their answer choice, they get a point added or subtracted from the score. 
function questionOne() {

    // time logic
    var startingTime = 2;
    let time = startingTime * 60; 
    var countDownEl = document.querySelector("#count-down");

    setInterval(updateCountdown, 1000);

    function updateCountdown () {
        const minutes = Math.floor(time/60);
        let seconds = time % 60;
        countDownEl.innerHTML = `${minutes}: ${seconds}`;
        time--;
        time = time < 0 ? 0 : time; 
};


    body.appendChild(newDiv); 
    newDiv.appendChild(question1);
    newDiv.appendChild(answer1);
    newDiv.appendChild(answer2); 
    newDiv.appendChild(answer3); 
    newDiv.appendChild(answer4); 
    newDiv.appendChild(answer5);  

    answer1.addEventListener("click", function() {
        
        
        playerScore++;

        savePlayerScore();


        
        // code below will display new question and a new set of answers
        question1.textContent = "What is an example of a Javascript data type?";
        answer1.textContent = "object";
        answer2.textContent = "array";
        answer3.textContent = "variable";
        answer4.textContent = "string";
        answer5.textContent = "all of the above";

        

        question3();
    }); 

    answer2.addEventListener("click", function() {
        

        playerScore--;

        savePlayerScore();


        
        // code below will display new question and a new set of answers
        question1.textContent = "What is an example of a Javascript data type?";
        answer1.textContent = "object";
        answer2.textContent = "array";
        answer3.textContent = "variable";
        answer4.textContent = "string";
        answer5.textContent = "all of the above";

        

        question3();
    }); 

    answer3.addEventListener("click", function() {
        

        playerScore--;

        savePlayerScore();


        
        // code below will display new question and a new set of answers
        question1.textContent = "What is an example of a Javascript data type?";
        answer1.textContent = "object";
        answer2.textContent = "array";
        answer3.textContent = "variable";
        answer4.textContent = "string";
        answer5.textContent = "all of the above";

        

        question3();
    }); 

    answer4.addEventListener("click", function() {
        
        
        playerScore--;

        savePlayerScore();


        
        // code below will display new question and a new set of answers
        question1.textContent = "What is an example of a Javascript data type?";
        answer1.textContent = "object";
        answer2.textContent = "array";
        answer3.textContent = "variable";
        answer4.textContent = "string";
        answer5.textContent = "all of the above";

        

        question3();
    }); 

    answer5.addEventListener("click", function() {
        

        playerScore--;

        savePlayerScore();


        
        // code below will display new question and a new set of answers
        question1.textContent = "What is an example of a Javascript data type?";
        answer1.textContent = "object";
        answer2.textContent = "array";
        answer3.textContent = "variable";
        answer4.textContent = "string";
        answer5.textContent = "all of the above";

        

        question3();
    }); 
    





};

function question3() {
    answer1.addEventListener("click", function() {
        
        
        playerScore--;

        savePlayerScore();


        
        // code below will display new question and a new set of answers
        question1.textContent = "Where should you place the link to your external CSS file?";
        answer1.textContent = "In the body";
        answer2.textContent = "In a div";
        answer3.textContent = "In the head";
        answer4.textContent = "In the script file";
        answer5.textContent = "you dont need a link";

        

        question4();
    }); 

    answer2.addEventListener("click", function() {
        
        
        playerScore--;

        savePlayerScore();


        
        // code below will display new question and a new set of answers
        question1.textContent = "Where should you place the link to your external CSS file?";
        answer1.textContent = "In the body";
        answer2.textContent = "In a div";
        answer3.textContent = "In the head";
        answer4.textContent = "In the script file";
        answer5.textContent = "you dont need a link";

        

        question4();
    }); 

    answer3.addEventListener("click", function() {
        
        
        playerScore--;

        savePlayerScore();


        
        // code below will display new question and a new set of answers
        question1.textContent = "Where should you place the link to your external CSS file?";
        answer1.textContent = "In the body";
        answer2.textContent = "In a div";
        answer3.textContent = "In the head";
        answer4.textContent = "In the script file";
        answer5.textContent = "you dont need a link";

        

        question4();
    }); 

    answer4.addEventListener("click", function() {
        
        
        playerScore--;

        savePlayerScore();


        
        // code below will display new question and a new set of answers
        question1.textContent = "Where should you place the link to your external CSS file?";
        answer1.textContent = "In the body";
        answer2.textContent = "In a div";
        answer3.textContent = "In the head";
        answer4.textContent = "In the script file";
        answer5.textContent = "you dont need a link";

        

        question4();
    }); 

    answer5.addEventListener("click", function() {
        
        
        playerScore++;

        savePlayerScore();

        
        // code below will display new question and a new set of answers
        question1.textContent = "Where should you place the link to your external CSS file?";
        answer1.textContent = "In the body";
        answer2.textContent = "In a div";
        answer3.textContent = "In the head";
        answer4.textContent = "In the script file";
        answer5.textContent = "you dont need a link";

        

        question4();
    }); 
};

function question4() {

    answer1.addEventListener("click", function() {
        
        
        playerScore--;

        savePlayerScore();


        
        // code below will display new question and a new set of answers
        question1.textContent = "What symbol allows you to use JQuery?";
        answer1.textContent = "&";
        answer2.textContent = "%";
        answer3.textContent = "#";
        answer4.textContent = "@";
        answer5.textContent = "$";

        

        question5();
    }); 

    answer2.addEventListener("click", function() {
        
        
        playerScore--;

        savePlayerScore();


        
        // code below will display new question and a new set of answers
        question1.textContent = "What symbol allows you to use JQuery?";
        answer1.textContent = "&";
        answer2.textContent = "%";
        answer3.textContent = "#";
        answer4.textContent = "@";
        answer5.textContent = "$";

        

        question5();
    }); 

    answer3.addEventListener("click", function() {
        
        
        playerScore--;

        savePlayerScore();


        
        // code below will display new question and a new set of answers
        question1.textContent = "What symbol allows you to use JQuery?";
        answer1.textContent = "&";
        answer2.textContent = "%";
        answer3.textContent = "#";
        answer4.textContent = "@";
        answer5.textContent = "$";

        

        question5();
    }); 

    answer4.addEventListener("click", function() {
        
        
        playerScore--;

        savePlayerScore();


        
        // code below will display new question and a new set of answers
        question1.textContent = "What symbol allows you to use JQuery?";
        answer1.textContent = "&";
        answer2.textContent = "%";
        answer3.textContent = "#";
        answer4.textContent = "@";
        answer5.textContent = "$";

        

        question5();
    }); 

    answer5.addEventListener("click", function() {
        
        
        playerScore--;

        savePlayerScore();


        
        // code below will display new question and a new set of answers
        question1.textContent = "What symbol allows you to use JQuery?";
        answer1.textContent = "&";
        answer2.textContent = "%";
        answer3.textContent = "#";
        answer4.textContent = "@";
        answer5.textContent = "$";

        

        question5();

    }); 


};


function question5() {

    answer1.addEventListener("click", function() {
        
        
        playerScore--;

        savePlayerScore();


        
        // code below will display new question and a new set of answers
        question1.textContent = "What is the command for adding files to commit to GitHub?";
        answer1.textContent = "git add .";
        answer2.textContent = "git clone";
        answer3.textContent = "git push";
        answer4.textContent = "cd ..";
        answer5.textContent = "cd /";

        



    }); 

    answer2.addEventListener("click", function() {
        
        
        playerScore--;

        savePlayerScore();


        
        // code below will display new question and a new set of answers
        question1.textContent = "What is the command for adding files to commit to GitHub?";
        answer1.textContent = "git add .";
        answer2.textContent = "git clone";
        answer3.textContent = "git push";
        answer4.textContent = "cd ..";
        answer5.textContent = "cd /";

        



    }); 

    answer3.addEventListener("click", function() {
        
        
        playerScore--;

        savePlayerScore();


        
        // code below will display new question and a new set of answers
        question1.textContent = "What is the command for adding files to commit to GitHub?";
        answer1.textContent = "git add .";
        answer2.textContent = "git clone";
        answer3.textContent = "git push";
        answer4.textContent = "cd ..";
        answer5.textContent = "cd /";

        



    }); 

    answer4.addEventListener("click", function() {
        
        
        playerScore--;

        savePlayerScore();

        
        // code below will display new question and a new set of answers
        question1.textContent = "What is the command for adding files to commit to GitHub?";
        answer1.textContent = "git add .";
        answer2.textContent = "git clone";
        answer3.textContent = "git push";
        answer4.textContent = "cd ..";
        answer5.textContent = "cd /";

        


    }); 

    answer5.addEventListener("click", function() {
        
        
        playerScore--;

        savePlayerScore();



        
        // code below will display new question and a new set of answers
        question1.textContent = "What is the command for adding files to commit to GitHub?";
        answer1.textContent = "git add .";
        answer2.textContent = "git clone";
        answer3.textContent = "git push";
        answer4.textContent = "cd ..";
        answer5.textContent = "cd /";


    }); 



};


var savePlayerScore = function() {
    // local storage set item
    localStorage.setItem("playerScore", playerScore);
    
}; 

previousScores.addEventListener("click", function() {

  
        previousScores.textContent  = "Your previous attempt: " + getPlayerScore;

 
 
 });

highScores.addEventListener("click", function() {

    highScores.textContent = "Score for this attempt: " + playerScore;
 
 
 });
 

// logic to begin game is below
function startQuiz() {
    
    alert('Once you click "ok" the timer will begin. Each missed answer results in 10 seconds being subtracted from the timer... good luck!')

    // call questionOne function to generate set of questions and answers
    questionOne();
};


// add event listener to start button, then call startQuiz function to begin quiz
startBtn.addEventListener("click", startQuiz);




