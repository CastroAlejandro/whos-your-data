$(document).ready(() => {
	console.log('Document Ready!');
	$('.userFave').on('click', (event) => {
		event.preventDefault();
		console.log(event.target);
		let userID =+ 1 ;
		let gameId = event.target.getAttribute('data-id');
		let gameTitle = event.target.getAttribute("data-title");
		let gameRating = event.target.getAttribute("data-rating");
		let gameGenre = event.target.getAttribute("data-genre");
		console.log(userID, gameId, gameTitle, gameRating, gameGenre);
		addUserFavorite(userID, gameId, gameTitle, gameRating, gameGenre);
	});

	function addUserFavorite(user_id, game_id, title, rating, genre,) {
		console.log("adding favorites")
		console.log(`ID: ${user_id} | gameID: ${game_id}| Title: ${title} | Rating: ${rating} | Genre: ${genre}`);
	
		//post info to server
		$.post("/api/favorites", {
			userID: user_id,
			gameId: game_id,
			gameTitle: title,
			gameRating: rating,
			gameGenre: genre,
		}).then(function (data) {
			console.log(data)
		})
	}
});