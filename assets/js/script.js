// Var with array and object for questions 
var questions = [
  {
      title: "Which tag is used to display text in title bar of a web document?",
      choices: ["Body tag", "Meta tag", "Title tag", "Comment tag"],
      answer: "Title tag"
  },
  {
      title: "The language that instructs the browser on how to display the hypertext, and adds pictures to the document is __",
      choices: ["C", "COBOL", "HTML", "BASIC"],
      answer: "HTML"
  },
  {
      title: "Which tag is used to identify the keywords describing the site?",
      choices: ["Comment tag", "Title tag", "Meta tag", "Anchor tag"],
      answer: "Meta tag"
  },
  {
      title: "HTML allows us to create three different kinds of ___",
      choices: ["Functions", "Events", "Files", "Lists"],
      answer: "Lists"
  },
  {
      title: "HTML allows us to use ___ levels of headings.",
      choices: ["Two", "Three", "Five", "Six"],
      answer: "Six"
  },

];
// Declared variables
var score = 0;
var quizIndex = 0;

// Start working code 
// Declared variables
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var quiz = document.querySelector("#quiz");
var container = document.querySelector("#container");

// declared variables for timer
var timeLeft = 60;
var timeInt = 0;
var makeUl = document.createElement("ul");

// Triggers timer on button, shows user a display on the screen
timer.addEventListener("click", function () {
  // If time is at 0 start the timer and start game
  if (timeInt === 0) {
      timeInt = setInterval(function () {
          timeLeft--;
          currentTime.textContent = "Time: " + timeLeft;

          // if time drops to less than or equal to 0 end the quiz and display the message times up
          if (timeLeft <= 0) {
              clearInterval(timeInt);
              endQuiz();
              currentTime.textContent = "Time's up!";
          }
      }, 1000);
  }
  startGame(quizIndex);
});

// this function starts the game 
function startGame(quizIndex) {
  // clears the current text before running through the questions
  quiz.innerHTML = "";
  makeUl.innerHTML = "";

  // the following for loop will loop through all questions in array
  for (var i = 0; i < questions.length; i++) {
      var userQuestion = questions[quizIndex].title;
      var userChoices = questions[quizIndex].choices;
      quiz.textContent = userQuestion;
  }
  // New for each for question choices
  userChoices.forEach(function (item) {
      var listEl = document.createElement("li");
      listEl.textContent = item;
      quiz.appendChild(makeUl);
      makeUl.appendChild(listEl);
      listEl.addEventListener("click", (check));
  })
}

// this function runs a check to see if user selected answer matches with answer found in the questions array
function check(event) {
  var element = event.target;

  if (element.matches("li")) {

      var checkDiv = document.createElement("div");
      checkDiv.setAttribute("id", "checkDiv");
      // Correct condition 
      if (element.textContent == questions[quizIndex].answer) {
          score++;
          checkDiv.textContent = "Correct!";
      
          
      } else {
          // Will deduct -10 seconds of timeLeft for wrong answers
          timeLeft -= 10;
          checkDiv.textContent = "Wrong!";
      }

  }
  // Question Index determines number question user is on
  quizIndex++;

  if (quizIndex >= questions.length) {
      // All done will append last page with user stats
      endQuiz();
      checkDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
  } else {
      startGame(quizIndex);
  }
  quiz.appendChild(checkDiv);

}
// this function will end the game
function endQuiz() {
  quiz.innerHTML = "";
  currentTime.innerHTML = "";

  var endH1 = document.createElement("h1");
  endH1.setAttribute("id", "endH1");
  endH1.textContent = "All Done!" 
  quiz.appendChild(endH1);


  var endP = document.createElement("p");
  endP.setAttribute("id", "endP");
  quiz.appendChild(endP);

  // gives you your final score if time>0
  if (timeLeft >= 0) {
      var timeRemaining = timeLeft;
      var endP2 = document.createElement("p");
      clearInterval(timeInt);
      endP2.textContent = "Your final score is: " + timeRemaining;
      quiz.appendChild(endP2);
  }

  // initials - Label
  var initialsLabel = document.createElement("label");
  initialsLabel.setAttribute("id", "initialsLabel");
  initialsLabel.textContent = "Enter your initials: ";
  quiz.appendChild(initialsLabel);

  // initials - input
  var initialsInput = document.createElement("input");
  initialsInput.setAttribute("type", "text");
  initialsInput.setAttribute("id", "initialsInput");
  initialsInput.textContent = "";
  quiz.appendChild(initialsInput);

  // initials - submit
  var submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.setAttribute("id", "submit");
  submit.textContent = "submit";
  quiz.appendChild(submit);

  // eventlistener to capture initials and local storage for initials and score
  submit.addEventListener("click", function () {
      var initials = initialsInput.value;

      if (initials === null || initials === "") {
      } else {
          var finalScore = {
              initials: initials,
              score: timeRemaining
          }
          var allScores = localStorage.getItem("allScores");
          if (allScores === null) {
              allScores = [];
          } else {
              allScores = JSON.parse(allScores);
          }
          allScores.push(finalScore);
          var newScore = JSON.stringify(allScores);
          localStorage.setItem("allScores", newScore);
          // the following line will take you to highscores page
          window.location.replace("highscores.html");
      }
  });

}


