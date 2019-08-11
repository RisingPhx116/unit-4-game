$(document).ready(function() {

//beginning variables
var wins = 0;
var losses = 0;
scoreCount = 0;

//random number generators
var randomScore = Math.floor(Math.random() * 102) + 19;
console.log(randomScore);
var gem1 = Math.floor(Math.random() * 12) + 1;
var gem2 = Math.floor(Math.random() * 12) + 1;
var gem3 = Math.floor(Math.random() * 12) + 1;
var gem4 = Math.floor(Math.random() * 12) + 1;

console.log(gem1);
console.log(gem2);
console.log(gem3);
console.log(gem4);

function reset() {
var randomScore = Math.floor(Math.random() * 102) + 19;
console.log(randomScore);
var gem1 = Math.floor(Math.random() * 12) + 1;
var gem2 = Math.floor(Math.random() * 12) + 1;
var gem3 = Math.floor(Math.random() * 12) + 1;
var gem4 = Math.floor(Math.random() * 12) + 1;

console.log(gem1);
console.log(gem2);
console.log(gem3);
console.log(gem4);

scoreCount = 0;
};

var randomScoreDiv = document.getElementById("randomScore");
randomScoreDiv.textContent = randomScore;

$("#gem1").on("click",function(event) {
    scoreCount = scoreCount + gem1;
    var scoreCountDiv=document.getElementById("scoreCount");
    //scoreCount.text("scoreCount");
    scoreCountDiv.textContent = scoreCount;
    if (scoreCount === randomScore) {
        wins++;
        var winsDiv=document.getElementById("wins");
        winsDiv.textContent = "Wins " + wins;
        reset();
    }
    else if (scoreCount > randomScore) {
        losses++
        var lossesDiv=document.getElementById("losses");
        lossesDiv.textContent = "Losses " +
         losses;
        reset();
    }
    
});

$("#gem2").on("click",function(event) {
    scoreCount = scoreCount + gem2;
    var scoreCountDiv=document.getElementById("scoreCount");
    //scoreCount.text("scoreCount");
    scoreCountDiv.textContent = scoreCount;
    if (scoreCount === randomScore) {
        wins++;
        reset();
    }
    else if (scoreCount > randomScore) {
        losses++
        reset();
    }
});

$("#gem3").on("click",function(event) {
    scoreCount = scoreCount + gem3;
    var scoreCountDiv=document.getElementById("scoreCount");
    //scoreCount.text("scoreCount");
    scoreCountDiv.textContent = scoreCount;
    if (scoreCount === randomScore) {
        wins++;

        reset();
    }
    else if (scoreCount > randomScore) {
        losses++
        reset();
    }
});

$("#gem4").on("click",function(event) {
    scoreCount = scoreCount + gem4;
    var scoreCountDiv=document.getElementById("scoreCount");
    //scoreCount.text("scoreCount");
    scoreCountDiv.textContent = scoreCount;
    if (scoreCount === randomScore) {
        wins++;
        reset();
    }
    else if (scoreCount > randomScore) {
        losses++
        reset();
    }
});


});