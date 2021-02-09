var submitBtn = $("#submit");

const genre = [
    'Action', 'Adventure', 'Arcade', 'Board Games', 'Card', 'Casual', 'Educational', 'Family', 'Fighting', 'Indie', 'Massively Multiplayer', 'Platformer', 'Puzzle', 'RPG', 'Racing', 'Shooter', 'Simulation', 'Sports', 'Strategy'
]
 
var esrb;


$(document).ready(function () {
	console.log('member.js loaded')
	// This file just does a GET request to figure out which user is logged in
	// and updates the HTML on the page
	$.get("/api/user_data").then(function (data) {
		$(".member-name").text(data.email);
	});

	$('.console').on('click', (event) => {
		console.log(event.target);
		console.log("hello")
	});

	generateGenres();
});

const generateGenres = () => {
	for (const item of genre) {
		let optionHtml = `
			<option value="${item}">
				${item}
			</option>
		`;

		$('#genreSelect').append(optionHtml);
	}
}

var developersPicks = $("#developers-picks")
developersPicks.hide()
var recommendations = $("#recommendations")
recommendations.hide()

function startQuiz() {
	console.log("start quiz");
	var cardChoices = $("#card-choices")
	cardChoices.hide()


	//Unhide the questions 
	recommendations.removeAttr("style")
	developersPicks.removeAttr("style")

}

submitBtn.on('click', startQuiz)