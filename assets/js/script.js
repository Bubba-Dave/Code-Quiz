var quizStatus = true;
var questionNumber = 0; 
var answerNumber = 0; 
var score = 0;
var highScore = 50; 
var finalAnswerCheck = 0 
var checkTimes = 1 
var viewHighScoresBtnEl = document.getElementById('view-high-scores'); 
var startQuizBtnEl = document.getElementById('start-quiz');
var answer1BtnEl = document.getElementById('answer1');
var answer2BtnEl = document.getElementById('answer2'); 
var answer3BtnEl = document.getElementById('answer3'); 
var answer4BtnEl = document.getElementById('answer4'); 
var submitScoreEl = document.getElementById('submitScore'); 
var questionsEl = document.getElementById('questions');
var mainDivEl = document.getElementById('mainDiv');
var htmlTimeLeft = document.getElementById('timeLeft');
var answerCorrectWrong = document.getElementById('answerCorrectWrong');
var questionDisplayEl = document.createElement("questionDisplay"); 
var finalScoreDisplayEl = document.createElement("finalScoreDisplay"); 
var enterInitialsEl = document.createElement("enterInitials"); 
var enterInitialsTextAreaEl = document.createElement("enterInitialsTextArea"); 
var button1234 = document.createElement("button"); 
var timeLeft = 60;

// hidden items until needed
answer1BtnEl.style.display = 'none';
answer2BtnEl.style.display = 'none';
answer3BtnEl.style.display = 'none';
answer4BtnEl.style.display = 'none';
submitScoreEl.style.display = 'none';
answerCorrectWrong.style.display='none';
enterInitialsTextArea.style.display='none';

//questions for quiz
var questionsObject = { 
    correct: { 
        0 : "What year was the character of Robin first introduced?",
        1 : "What Batman villain formerly worked as a zoologist?",
        2 : "Which of the following characters is the supervillain Clayface?", 
        3 : "Who is credited with creating Batman?", 
        4 : "Who killed Batman's parents?"
    }
};
//possible answers for quiz
var answersObject = { 
    answers: { 
        0 : {
            0: "1960", 
            1: "1950", 
            2: "1940", //correct answer
            3: "1970"}, 
        1 : {
            0: "Man Bat", //correct answer
            1: "Poison Ivy",  
            2: "Killer Croc", 
            3: "The Penguin"}, 
        2 : { 
            0: "Joe Shuster", 
            1: "Jerry Siegel",
            2: "Bob Kane",  //correct answer
            3: "Jack Kirby"},   
        3 : { 
            0: "Sal Maroni", 
            1: "Joe Chill", //correct answer
            2: "Killer Croc", 
            3: "Frank Miller"},    
        4 : { 
            0: "Matt Hagen", 
            1: "Preston Payne", 
            2: "Basil Karlo", 
            3: "All of the above"},  //correct answer
    }
};

