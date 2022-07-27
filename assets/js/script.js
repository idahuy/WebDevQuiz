var timer = document.getElementById('countdown')

function countdown() {
    var timeLeft = 60;
  
    // TODO: Add a comment describing the functionality of the setInterval() method: setintervall method to call function to be executed every 1000ms (1s)
    var timeInterval = setInterval(function () {
      // TODO: Add comments describing the functionality of the `if` statement: if timeleft is more than 1 timer will continue to count down with 'value>1 seconds remaining' plural
      if (timeLeft > 1) {
        timer.textContent = "Time: " + timeLeft;
        timeLeft--;
      } // TODO: Add comments describing the functionality of the `else` statement: clear the text content and time interval function then it will start the displayMessage function
      else {
        timer.textContent = 'Time: 0';
        clearInterval(timeInterval);
      }
    }, 1000);
  }



  countdown();