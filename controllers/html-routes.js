// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const pages = require("./pages")

// Requiring our custom middleware for checking if a user is logged in
let isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/gamesList");
    }
    // res.sendFile(path.join(__dirname, "../public/signup.html"));
    res.render("signup")
  });

 app.get("/gamesList", pages.gamesList);

 app.get("/login", pages.login);
  
  app.get("/about", function (req, res) {
    res.render("about");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    res.render("members");
  });

};
