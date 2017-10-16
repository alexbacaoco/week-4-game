// this is for the random numbers each user must get
var randomNumber = ["100", "30", "80", "15"];

// this will hold the total score
var totalScore = [];

// wins & losses counter
var wins = 0;
var losses = 0;

// resets game
var reset = function() {
	wins = 0;
	losses = 0;
	totalScore = [];
	randomNumber = [];
}

// reprints each round
document.getElementyById("total-score").innerHTML = totalScore;

// capture what key is pressed
document.onkeyup = function(event) {
}

// assign points to red crystal

// assign points to blue crystal

// assign points to yellow crystal

// assign points to green crystal

// if user goes over total score
for (var i = 0; i < randomNumber.length; i++) {
	if (randomNumber !== totalScore) {
	// add to losses counter
	losses++;
	}
}

// if user matches total score
for (var i = 0; i < randomNumber.length; i++) {
	if (randomNumber === totalScore) {
	// add to wins counter
	wins++;
	}
}






