var submitBtn = $("#submit");

$(document).ready(function () {
  console.log('member.js loaded')
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });
});

var developersPicks = $("#developers-picks")
developersPicks.hide()

function startQuiz() {
  console.log("start quiz");
  var cardChoices = $("#card-choices")
  cardChoices.hide()
  

  //Unhide the questions 
  developersPicks.removeAttr("style")

}

submitBtn.on('click', startQuiz)