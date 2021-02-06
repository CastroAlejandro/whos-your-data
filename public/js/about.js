$(document).ready(function() {
    console.log('about.js loaded')
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/about").then(function(data) {
      $(".member-name").text(data.email);
    });
  });
  