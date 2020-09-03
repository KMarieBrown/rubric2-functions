'use strict';
// Test my JS file.
console.log('My JavaScript is working!');

// Creates a basic function and invokes it by name.
function sunshine() {
	document.getElementById('sun').innerHTML = 'Sunny days are the best days!';
}
sunshine();

// Passes info into a function.
function seasonWish(a, b) {
	var subtractSeasons = 'I wish I lived in a climate with only ' + (a - b) + ' season.';
	alert(subtractSeasons);
}
seasonWish(4, 3);

// Use switch to prompt a question.
var favoriteSeason = prompt('What is your favorite time of year: Winter, Spring, Summer or Fall?');

switch (favoriteSeason) {
	case 'Winter':
		alert('Brr, it can be so cold!');
		break;

	case 'Spring':
		alert("It's nice to see the flowers start to bloom.");
		break;

	case 'Summer':
		alert("It's so hot!");
		break;

	case 'Fall':
		alert("It's nice when the weather starts to calm down a bit.");
		break;

	default:
		alert('Sorry, that is not a valid season.');
		break;
}

// Passes info into the function and returns data from the function.
function myOpinion(season) {
	var beauty = "I think it's beautiful to see leaves change colors in the " + season + '.';
	return beauty;
}
var bestSeason = myOpinion('Fall');
alert(bestSeason);
