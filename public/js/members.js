$(document).ready(function () {

var submitBtn = $("#submit");

const genre = [
    'Action', 'Adventure', 'Arcade', 'Board Games', 'Card', 'Casual', 'Educational', 'Family', 'Fighting', 'Indie', 'Massively Multiplayer', 'Platformer', 'Puzzle', 'RPG', 'Racing', 'Shooter', 'Simulation', 'Sports', 'Strategy'
]
 
const platform = [
	{ 'name': 'PC', 'platform': 4 },
	{ 'name': 'PlayStation 5', 'platform': 187 },
	{ 'name': 'Xbox One', 'platform': 1 },
	{ 'name': 'PlayStation 4', 'platform': 18 },
	{ 'name': 'Xbox Series S/X', 'platform': 186 },
	{ 'name': 'Nintendo Switch', 'platform': 7 },
	{ 'name': 'iOS', 'platform': 3 },
	{ 'name': 'Android', 'platform': 21 },
	{ 'name': 'Nintendo 3DS', 'platform': 8 },
	{ 'name': 'Nintendo DS', 'platform': 9 },
	{ 'name': 'Nintendo DSi', 'platform': 13 },
	{ 'name': 'macOS', 'platform': 5 },
	{ 'name': 'Linux', 'platform': 6 },
	{ 'name': 'Xbox 360', 'platform': 14 },
	{ 'name': 'Xbox', 'platform': 80 },
	{ 'name': 'PlayStation 3', 'platform': 16 },
	{ 'name': 'PlayStation 2', 'platform': 15 },
	{ 'name': 'PlayStation', 'platform': 27 },
	{ 'name': 'PS Vita', 'platform': 19 },
	{ 'name': 'PSP', 'platform': 17 },
	{ 'name': 'Wii U', 'platform': 10 },
	{ 'name': 'Wii', 'platform': 11 },
	{ 'name': 'GameCube', 'platform': 105 },
	{ 'name': 'Nintendo 64', 'platform': 83 },
	{ 'name': 'Game Boy Advance', 'platform': 24 },
	{ 'name': 'Game Boy Color', 'platform': 43 },
	{ 'name': 'Game Boy', 'platform': 26 },
	{ 'name': 'SNES', 'platform': 79 },
	{ 'name': 'NES', 'platform': 49 },
	{ 'name': 'Classic Macintosh', 'platform': 55 },
	{ 'name': 'Apple II', 'platform': 41 },
	{ 'name': 'Commodore / Amiga', 'platform': 166 },
	{ 'name': 'Atari 7800', 'platform': 28 },
	{ 'name': 'Atari 5200', 'platform': 31 },
	{ 'name': 'Atari 2600', 'platform': 23 },
	{ 'name': 'Atari Flashback', 'platform': 22 },
	{ 'name': 'Atari 8-bit', 'platform': 25 },
	{ 'name': 'Atari ST', 'platform': 34 },
	{ 'name': 'Atari Lynx', 'platform': 46 },
	{ 'name': 'Atari XEGS', 'platform': 50 },
	{ 'name': 'Genesis', 'platform': 167 },
	{ 'name': 'SEGA Saturn', 'platform': 107 },
	{ 'name': 'SEGA CD', 'platform': 119 },
	{ 'name': 'SEGA 32X', 'platform': 117 },
	{ 'name': 'SEGA Master System', 'platform': 74 },
	{ 'name': 'Dreamcast', 'platform': 106 },
	{ 'name': '3DO', 'platform': 111 },
	{ 'name': 'Jaguar', 'platform': 112 },
	{ 'name': 'Game Gear', 'platform': 77 },
	{ 'name': 'Neo Geo', 'platform': 12 }
  ]


const publishers = [
	
]

  var userID;


	console.log('member.js loaded')
	// This file just does a GET request to figure out which user is logged in
	// and updates the HTML on the page
	$.get("/api/user_data").then(function (data) {
		$(".member-name").text(data.email);
		userID = data.id;
		
	});
	console.log(userID)
	$('.console').on('click', (event) => {
		console.log(event.target);
		console.log("hello")
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
const generatePlatforms = () => {
	for (const item of platform) {
		let optionHtml = `
			<option value="${item.platform}">
				${item.name}
			</option>
		`;

		$('#platformSelect').append(optionHtml);
	}

}

generateGenres();
generatePlatforms();

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

const checkParameters = () => {
	let platform = $('#platformSelect').val();
	let selectedGenre = $('#genreSelect').val();
	let url = `http://localhost:8080/query_results?platformId=${platform}&genre=${selectedGenre}`;
	$.get(url, (data, status) => {
		try {
			console.log(data);
		}
		catch (exception) {
			console.log(exception);
		}
	});

	// findGames(platform, selectedGenre);
}

const findGames = (platformId, genreType) => {
	window.location = `http://localhost:8080/results?platformId=${platformId}&genre=${genreType}`;
}
$('.userFave').on('click', (event) => {
	event.preventDefault();
	console.log(event.target);
	
	let gameTitle = event.target.getAttribute("value");
	let gameRating = event.target.getAttribute("data-rating");
	let gameGenre = event.target.getAttribute("data-genre");
	console.log(userID, gameTitle, gameRating, gameGenre);
	addUserFavorite(userID, gameTitle, gameRating, gameGenre);
});
function addUserFavorite(id, title, rating, genre){
	console.log("adding favorites")
	//post info to server
	$.post("/api/favorites", {
		userID: id,
		gameTitle: title,
		gameRating: rating,
		gameGenre: genre
	}).then(function(data){
		console.log(data)
	})
}
submitBtn.on('click', startQuiz)
submitBtn.on('click', checkParameters);
  






});