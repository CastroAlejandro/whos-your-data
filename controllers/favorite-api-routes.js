// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

	// GET route for getting all of the posts
	app.get("/api/posts", function (req, res) {
		var query = {};
		if (req.query.author_id) {
			query.AuthorId = req.query.author_id;
		}
		// Here we add an "include" property to our options in our findAll query
		// We set the value to an array of the models we want to include in a left outer join
		// In this case, just db.Author
		db.Favorite.findAll({
			where: query,
			include: [db.User]
		}).then(function (dbFavorite) {
			res.json(dbFavorite);
		});
	});

	// Get route for retrieving a single post
	app.get("/api/posts/:id", function (req, res) {
		// Here we add an "include" property to our options in our findOne query
		// We set the value to an array of the models we want to include in a left outer join
		// In this case, just db.Author
		db.Favorite.findOne({
			where: {
				id: req.params.id
			},
			include: [db.User]
		}).then(function (dbFavorite) {
			res.json(dbFavorite);
		});
	});


	// POST route for saving a new post
	app.post("/api/favorites", function (req, res) {
		console.log('\n\nInserting Favorite\n\n');
		db.Favorite.create({
			title: req.body.gameTitle,
			genre: req.body.gameGenre,
			// createdAt: NOW(),
			// updatedAt: NOW(),npm
			UserId: req.body.userID,
			rating: req.body.gameRating,
			gameId: req.body.gameId
		}).then(function (dbFavorite) {
			res.json(dbFavorite);
		});
	});


	// DELETE route for deleting posts
	app.delete("/api/posts/:id", function (req, res) {
		db.Favorite.destroy({
			where: {
				id: req.params.id
			}
		}).then(function (dbFavorite) {
			res.json(dbFavorite);
		});
	});

	// PUT route for updating posts
	app.put("/api/posts", function (req, res) {
		db.Favorite.update(
			req.body,
			{
				where: {
					id: req.body.id
				}
			}).then(function (dbFavorite) {
				res.json(dbFavorite);
			});
	});
};
