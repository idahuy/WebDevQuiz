// declare countdown id for timer variable
var timer = document.getElementById('countdown')

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
