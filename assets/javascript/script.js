// identify start button
var startBtn = document.querySelector("#start");

// identify container div for qeustions and answers for appending purposes
var parentDiv = document.querySelector("#parentDiv"); 

// identify body 
var body = document.querySelector("body"); 

// identify high scores link
var scoreBtn = document.querySelector("#high-scores"); 

// time variable 
var timer = 120; 

//player score variable; player starts with 10 points
var playerScore = 10;

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
answer1.setAttribute = "value" , "true"
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

    body.appendChild(newDiv); 
    newDiv.appendChild(question1);
    newDiv.appendChild(answer1);
    newDiv.appendChild(answer2); 
    newDiv.appendChild(answer3); 
    newDiv.appendChild(answer4); 
    newDiv.appendChild(answer5);  

    answer1.addEventListener("click", function() {
        
        
        playerScore++;


        
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


        
        // code below will display new question and a new set of answers
        question1.textContent = "Where should you place the link to your external CSS file?";
        answer1.textContent = "In the body";
        answer2.textContent = "In a div";
        answer3.textContent = "In the head";
        answer4.textContent = "In the script file";
        answer5.textContent = "you dont need a link";

        // call question 4 below
        question4();
    }); 

    answer2.addEventListener("click", function() {
        
        
        playerScore--;


        
        // code below will display new question and a new set of answers
        question1.textContent = "Where should you place the link to your external CSS file?";
        answer1.textContent = "In the body";
        answer2.textContent = "In a div";
        answer3.textContent = "In the head";
        answer4.textContent = "In the script file";
        answer5.textContent = "you dont need a link";

        // call question 4 below
        question4();
    }); 

    answer3.addEventListener("click", function() {
        
        
        playerScore--;


        
        // code below will display new question and a new set of answers
        question1.textContent = "Where should you place the link to your external CSS file?";
        answer1.textContent = "In the body";
        answer2.textContent = "In a div";
        answer3.textContent = "In the head";
        answer4.textContent = "In the script file";
        answer5.textContent = "you dont need a link";

        // call question 4 below
        question4();
    }); 

    answer4.addEventListener("click", function() {
        
        
        playerScore--;


        
        // code below will display new question and a new set of answers
        question1.textContent = "Where should you place the link to your external CSS file?";
        answer1.textContent = "In the body";
        answer2.textContent = "In a div";
        answer3.textContent = "In the head";
        answer4.textContent = "In the script file";
        answer5.textContent = "you dont need a link";

        // call question 4 below
        question4();
    }); 

    answer5.addEventListener("click", function() {
        
        
        playerScore++;

        console.log(playerScore);

        
        // code below will display new question and a new set of answers
        question1.textContent = "Where should you place the link to your external CSS file?";
        answer1.textContent = "In the body";
        answer2.textContent = "In a div";
        answer3.textContent = "In the head";
        answer4.textContent = "In the script file";
        answer5.textContent = "you dont need a link";

        // call question 4 below
        question4();
    }); 
};

function question4() {

    answer1.addEventListener("click", function() {
        
        
        playerScore--;


        
        // code below will display new question and a new set of answers
        question1.textContent = "What symbol allows you to use JQuery?";
        answer1.textContent = "&";
        answer2.textContent = "%";
        answer3.textContent = "#";
        answer4.textContent = "@";
        answer5.textContent = "$";

        // call question 4 below
        question5();
    }); 

    answer2.addEventListener("click", function() {
        
        
        playerScore--;


        
        // code below will display new question and a new set of answers
        question1.textContent = "What symbol allows you to use JQuery?";
        answer1.textContent = "&";
        answer2.textContent = "%";
        answer3.textContent = "#";
        answer4.textContent = "@";
        answer5.textContent = "$";

        // call question 4 below
        question5();
    }); 

    answer3.addEventListener("click", function() {
        
        
        playerScore--;


        
        // code below will display new question and a new set of answers
        question1.textContent = "What symbol allows you to use JQuery?";
        answer1.textContent = "&";
        answer2.textContent = "%";
        answer3.textContent = "#";
        answer4.textContent = "@";
        answer5.textContent = "$";

        // call question 4 below
        question5();
    }); 

    answer4.addEventListener("click", function() {
        
        
        playerScore--;


        
        // code below will display new question and a new set of answers
        question1.textContent = "What symbol allows you to use JQuery?";
        answer1.textContent = "&";
        answer2.textContent = "%";
        answer3.textContent = "#";
        answer4.textContent = "@";
        answer5.textContent = "$";

        // call question 4 below
        question5();
    }); 

    answer5.addEventListener("click", function() {
        
        
        playerScore--;


        
        // code below will display new question and a new set of answers
        question1.textContent = "What symbol allows you to use JQuery?";
        answer1.textContent = "&";
        answer2.textContent = "%";
        answer3.textContent = "#";
        answer4.textContent = "@";
        answer5.textContent = "$";

        // call question 4 below
        question5();
    }); 


};


function question5() {

    answer1.addEventListener("click", function() {
        
        
        playerScore--;


        
        // code below will display new question and a new set of answers
        question1.textContent = "What is the command for adding files to commit to GitHub?";
        answer1.textContent = "git add .";
        answer2.textContent = "git clone";
        answer3.textContent = "git push";
        answer4.textContent = "cd ..";
        answer5.textContent = "cd /";

        // call question 4 below

    }); 

    answer2.addEventListener("click", function() {
        
        
        playerScore--;


        
        // code below will display new question and a new set of answers
        question1.textContent = "What is the command for adding files to commit to GitHub?";
        answer1.textContent = "git add .";
        answer2.textContent = "git clone";
        answer3.textContent = "git push";
        answer4.textContent = "cd ..";
        answer5.textContent = "cd /";

        // call question 4 below

    }); 

    answer3.addEventListener("click", function() {
        
        
        playerScore--;


        
        // code below will display new question and a new set of answers
        question1.textContent = "What is the command for adding files to commit to GitHub?";
        answer1.textContent = "git add .";
        answer2.textContent = "git clone";
        answer3.textContent = "git push";
        answer4.textContent = "cd ..";
        answer5.textContent = "cd /";

        // call question 4 below

    }); 

    answer4.addEventListener("click", function() {
        
        
        playerScore--;


        
        // code below will display new question and a new set of answers
        question1.textContent = "What is the command for adding files to commit to GitHub?";
        answer1.textContent = "git add .";
        answer2.textContent = "git clone";
        answer3.textContent = "git push";
        answer4.textContent = "cd ..";
        answer5.textContent = "cd /";

        // call question 4 below

    }); 

    answer5.addEventListener("click", function() {
        
        
        playerScore--;


        
        // code below will display new question and a new set of answers
        question1.textContent = "What is the command for adding files to commit to GitHub?";
        answer1.textContent = "git add .";
        answer2.textContent = "git clone";
        answer3.textContent = "git push";
        answer4.textContent = "cd ..";
        answer5.textContent = "cd /";

        // call question 4 below

    }); 

}

// logic to begin game is below
function startQuiz() {
    
    alert('Once you click "ok" the timer will begin. Each missed answer results in 10 seconds being subtracted from the timer... good luck!')

    // call questionOne function to generate set of questions and answers
    questionOne();
};


// add event listener to start button, then call startQuiz function to begin quiz
startBtn.addEventListener("click", startQuiz);




