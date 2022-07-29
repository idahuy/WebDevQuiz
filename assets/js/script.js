// declare countdown id for timer variable
var timer = document.getElementById('countdown');

// declared vars
var score = 0;
var quizArr = 0;
var quiz = document.querySelector(".quiz");
var container = document.querySelector(".container");
var startButton = document.querySelector("#start");

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

function startGame(quizArr) {
  var makeUl = document.createElement("ul");
  // wipes existing strings on page
  quiz.innerHTML = "";
  makeUl.innerHTML = "";
  // loops through questions array
  for (var i = 0; i < questions.length; i++) {
    var userQuestions = questions[quizArr].title;
    var userChoices = questions[quizArr].choices;
    quiz.textContent = userQuestions;
  }

  userChoices.forEach(function(item) {
    var listEl = document.createElement("li");
    listEl.textContent = item;
    quiz.appendChild(makeUl);
    makeUl.appendChild(listEl);
    listEl.addEventListener("click", (check));
  })
};

// create a function to check user choices to correct answers
function check(event) {
  var element = event.target;

  if (element.matches("li")) {
    var divEl = document.createElement("div");
    divEl.setAttribute("id", "divEl");
    // check conditions
    if (element.textContent == questions[quizArr].answer) {
      // if user selected answer matches the correct answer in the array, add 10 to user's score and display the following message
      score += 10;
      divEl.textContent = "Correct"
    } else {
      // if user selected answer does not match the correct answer listed in the array, subtract 10 to the user's score and display the following message
      timeLeft -= 10;
      divEl.textContent = "Wrong"
    }
  }
  // determines where you are currently in the array
  quizArr++;
  
  if (quizArr >= questions.length) {
    var totalScore = score + timeLeft;
    // when the counter for quizarr reaches a number higher than the amount of question objects listed in array display the following string
    endGame();
    divEl.textContent = "End of the quiz, your score is " + totalScore;
  } else {
    startGame(quizArr);
  }
  quiz.appendChild(divEl);
};


// displays the end screen for the quiz
function endQuiz() {
  
  var makeH3 = document.createElement("h3");
  makeH3.setAttribute("class", "challenge");
  makeH3.textContent = "All done!"
  quiz.appendChild(makeH3);

  var makeP = document.createElement("p");
  quiz.appendChild(makeP);

  // gets final score
  if (totalScore >= 0) {
    var scoreP = document.createElement("p");
    scoreP.textContent = "Your final score is: " + totalScore;
    quiz.appendChild(scoreP);
  }

  function enterInitials() {
    // enter initials string
    var initialsPrompt = document.createElement("label");
    initialsPrompt.setAttribute("class", "initials");
    initialsPrompt.textContent = "Enter your initials: ";
    quiz.appendChild(initialsPrompt);

    // user input for initials
    var initialsInput = document.createElement("input");
    initialsInput.setAttribute("type", "text");
    initialsInput.setAttribute("class", "initialsInput");
    initialsInput.setAttribute("placeholder", "Please enter initials...")
    initialsInput.textContent = "";
    quiz.appendChild(initialsInput);

    // submit button for initials input
    var submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.setAttribute("class", "submit");
    submit.textContent = "Submit";
    quiz.appendChild(submit);
  }

  // add an event listener for the button to capture initials and to add the initials + score to local storage
  submit.addEventListener("click", function() {
    var initials = initialsInput.value;

    // will alert user if no value was entered continue to ask for initials until something is entered
    if (initials === null || initials === "") {
      window.alert("No value entered!");
      enterInitials();
    } else {
      var highScore = {
        initials: initials,
        score: totalScore
      }
      var allScores = localStorage.getItem("allScores");
      if (allScores = null) {
        allScores = [];
      } else {
        allScores = JSON.parse(allScores);
      }
      allScores.push(totalScore);
      var newScore = JSON.stringify(allScores);
      localStorage.setItem("allScores", newScore);
      // takes you to highscore.html
      window.location.replace("./highscores.html");
    }
  });
}

startButton.addEventListener('click', function() {
  countdown();
  startGame(quizArr);
});
