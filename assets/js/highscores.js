var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Retreives local stroage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null || allScores !== "") {

    for (var i = 0; i < allScores.length; i++) {

        var makeLi = document.createElement("li");
        makeLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(makeLi);

    }
}
// the following two lines of code will direct us back to the make quiz page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});