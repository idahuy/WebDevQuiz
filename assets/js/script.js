// declare countdown id for timer variable
var timer = document.getElementById('countdown')

// declared vars
var score = 0;
var quizIndex = 0;
var quiz = document.querySelector(".quiz")
var container = document.querySelector(".container")

// declare array for objects of questions
var questions = [
  {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
  },
  {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
  },
  {
      title: "Arrays in Javascript can be used to store ____.",
      choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
      answer: "all of the above"
  },
  {
      title: "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parenthesis"],
      answer: "quotes"
  },
  {
      title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
      choices: ["Javascript", "terminal / bash", "for loops", "console log"],
      answer: "console log"
  },
];

// quiz timer
function countdown() {
  // set initial time to 60 seconds
  var timeLeft = 60;
  
  var timeInterval = setInterval(function () {
    // if timeleft is more than 1 continue to countdown
    if (timeLeft > 1) {
      timer.textContent = "Time: " + timeLeft;
      timeLeft--;
    } 
    // else display time: 0
    else {
      timer.textContent = 'Time: 0';
      clearInterval(timeInterval);
    }
  }, 1000);
};

function startGame(quizIndex) {
  
}

function setNextQuestion() {

}

function selectAnswer() {

}

startButton.addEventListener('click', function() {
  countdown();
});
