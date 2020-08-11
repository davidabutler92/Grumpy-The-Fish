$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").toggleClass("black-background");
  });
  $("p#paragraph").click(function() {
    // console.log("CLICK!");
    $("p").toggleClass("highlight-text");
  });
});
