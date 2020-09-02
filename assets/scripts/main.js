'use strict';
// Test my JS file.
console.log('My JavaScript is working!');

// Creates and calls a function by name.
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

// Returns data from a function.
function myOpinion(season) {
	var beauty = 'I love the beauty of leaves changing colors in ' + season + '.';
	return beauty;
}
var seasons2 = myOpinion('Fall');
alert(seasons2);
