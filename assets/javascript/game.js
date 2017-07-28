
var alphaBet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var guessedArr =[]
var wins = 0;
var losses = 0;
var guesses = 9;




document.onkeyup = function(event) {
var userGuess = event.key;
var	computerGuess = alphaBet[Math.floor(Math.random() * alphaBet.length)];
guessedArr.push(userGuess)


	if (userGuess === computerGuess){
		wins++;
		guesses = 9;
		guessedArr =[] ;

	}
	

	else if (userGuess !== computerGuess && guesses > 1){
		guesses--;


	}

	else {
		losses++;
		guesses = 9;
		guessedArr =[] ;


} 



var html = 
"<p>Wins: " + wins + "</p>" + "<br/>" +
"<p>Losses: " + losses + "</p>" + "<br/>" +
"<p>Guesses Left: " + guesses + "</p>" + "<br/>" +
"<p>Letters Guessed: " + guessedArr + "</p>";

document.querySelector("#content").innerHTML = html;




};


