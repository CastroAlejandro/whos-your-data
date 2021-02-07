var submitBtn = $("#submit");

$(document).ready(function () {
  console.log('member.js loaded')
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });
});

var cardChoices = $("#card-choices")
cardChoices.hide()

var developersPicks = $("#developers-picks")
developersPicks.hide()

function startQuiz() {
  console.log("start quiz");
  var startScreen = $("#start-screen");
  startScreen.hide()

  //Unhide the questions 
  developersPicks.removeAttr("style")

}

startBtn.on('click', startQuiz)